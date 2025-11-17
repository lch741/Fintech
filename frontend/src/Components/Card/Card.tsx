import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";

interface Props{
  id: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({id, searchResult}: Props) : React.JSX.Element => {
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
        </div>

    </div>
  )
}

export default Card