import React from 'react'

interface Props {
   onPortfoliocreate: (e: React.SyntheticEvent) => void;
   Symbol: string; 
}

const AddPortfolio = ({onPortfoliocreate, Symbol}: Props) => {
  return (
    <form onSubmit={onPortfoliocreate}>     
        <input readOnly={true} hidden={true} value={Symbol}/>
        <button type="submit" >Add to Portfolio</button>
    </form>
  )
}

export default AddPortfolio