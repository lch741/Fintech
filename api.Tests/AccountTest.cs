using api.Controllers;
using api.Dtos.Account;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace api.Tests;

public class AccountTest
{
    private static Mock<UserManager<AppUser>> MockUserManager()
    {
        var store = new Mock<IUserStore<AppUser>>();

        return new Mock<UserManager<AppUser>>(
            store.Object,
            null!,
            null!,
            null!,
            null!,
            null!,
            null!,
            null!,
            null!
        );
    }

    private static Mock<SignInManager<AppUser>> MockSignInManager()
    {
        var userManager = MockUserManager().Object;
        var contextAccessor = new Mock<IHttpContextAccessor>();
        var claimsFactory = new Mock<IUserClaimsPrincipalFactory<AppUser>>();

        return new Mock<SignInManager<AppUser>>(
            userManager,
            contextAccessor.Object,
            claimsFactory.Object,
            null!,
            null!,
            null!,
            null!
        );
    }

    [Fact]
    public async Task Register_ReturnsOk_WhenUserIsCreated()
    {
        // Arrange
        var userManager = MockUserManager();
        var signInManager = MockSignInManager();
        var tokenService = new Mock<ITokenService>();

        tokenService.Setup(x => x.CreateToken(It.IsAny<AppUser>()))
            .Returns("test-token");

        userManager.Setup(x => x.CreateAsync(It.IsAny<AppUser>(), It.IsAny<string>()))
            .ReturnsAsync(IdentityResult.Success);

        userManager.Setup(x => x.AddToRoleAsync(It.IsAny<AppUser>(), "User"))
            .ReturnsAsync(IdentityResult.Success);

        var controller = new AccountController(
            userManager.Object,
            tokenService.Object,
            signInManager.Object
        );

        // Act
        var result = await controller.Register(new RegisterDto
        {
            Username = "test",
            Email = "test@test.com",
            Password = "Password123!"
        });

        // Assert
        Assert.IsType<OkObjectResult>(result);
    }

    [Fact]
    public async Task Login_ReturnsUnauthorized_WhenPasswordWrong()
    {
        // Arrange
        var userManager = MockUserManager();
        var signInManager = MockSignInManager();
        var tokenService = new Mock<ITokenService>();

        var user = new AppUser { UserName = "test" };

        userManager.Setup(x => x.Users)
                .Returns(new List<AppUser> { user }.AsQueryable());

        signInManager.Setup(x => x.CheckPasswordSignInAsync(user, "wrongpass", false))
                    .ReturnsAsync(Microsoft.AspNetCore.Identity.SignInResult.Failed);

        var controller = new AccountController(
            userManager.Object,
            tokenService.Object,
            signInManager.Object
        );

        // Act
        var result = await controller.Login(new LoginDto
        {
            Username = "test",
            Password = "wrongpass"
        });

        // Assert
        Assert.IsType<UnauthorizedObjectResult>(result);
    }
}