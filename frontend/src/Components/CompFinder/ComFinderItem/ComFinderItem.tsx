import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    ticker:string;
}

const ComFinderItem = ({ticker}: Props) => {
  return (
    <Link 
    reloadDocument 
    to={`/company/${ticker}/company-profile`}
    type="button"
    className="inline-flex items-cemter p-4 rounded-1-lg">
        {ticker}
    </Link>
  )
}

export default ComFinderItem