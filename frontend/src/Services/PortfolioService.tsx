import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { PortfolioPost,PortfolioGet } from "../Models/Portfolio";

const api = "http://fintech-gcdvg7fyewdxgme6.australiaeast-01.azurewebsites.net/api/portfolio/";

export const portfolioAddAPI = async (symbol:string) => {
    try{
        const data = await axios.post<PortfolioPost>(api+`?symbol= ${symbol.trim()}`,);
        return data;
    }catch(error){
        handleError(error);
    }
};

export const portfolioGetAPI = async () => {
    try{
        const data = await axios.get<PortfolioGet[]>(api);
        return data;
    }catch(error){
        handleError(error);
    }
};

export const portfolioDeleteAPI = async (symbol:string) => {
    try{
        const data = await axios.delete<PortfolioPost>(api+`?symbol= ${symbol.trim()}`,);
        return data;
    }catch(error){
        handleError(error);
    }
};
