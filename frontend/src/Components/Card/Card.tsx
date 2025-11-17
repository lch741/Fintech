import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props{
  id: string;
  searchResult: CompanySearch;
  onPortfoliocreate: (e: React.SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResult, onPortfoliocreate}: Props) : React.JSX.Element => {
  return (
    <div key={id} id={id} className="card">
      
        <div className="details">
          <h2>
            {searchResult.name} ({searchResult.symbol})
          </h2>
          <p>{searchResult.currency}</p>
        </div>

        <div>
            <p className="infon">
                {searchResult.exchange} - {searchResult.exchangeFullName}
            </p>
            <AddPortfolio onPortfoliocreate={onPortfoliocreate} Symbol={searchResult.symbol} />
        </div>

    </div>
  )
}

export default Card