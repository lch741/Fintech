using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using Xunit;

namespace api.Tests
{
public class AuthIntegrationTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public AuthIntegrationTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task Register_Then_Login_ReturnsToken()
    {
        // Register
        var registerResponse = await _client.PostAsJsonAsync("/api/account/register", new
        {
            username = "testuser123",
            email = "test@test.com",
            password = "Password123!"
        });

        Assert.Equal(HttpStatusCode.OK, registerResponse.StatusCode);

        // Login
        var loginResponse = await _client.PostAsJsonAsync("/api/account/login", new
        {
            username = "testuser123",
            password = "Password123!"
        });

        Assert.Equal(HttpStatusCode.OK, loginResponse.StatusCode);

        var content = await loginResponse.Content.ReadAsStringAsync();

        Assert.Contains("token", content);
    }
}
}