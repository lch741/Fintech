import Card from '../Card/Card'
import React from 'react'
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfoliocreate: (e: React.SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortfoliocreate }: Props): React.JSX.Element => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return (
            <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfoliocreate={onPortfoliocreate}/>
          );
        })
      ) : (
        <h1>No results!</h1>
      )}
    </>
  );
};

export default CardList;