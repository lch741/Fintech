import React from 'react'
import { CompanyTenK } from '../../../company'
import { Link } from 'react-router-dom';

type Props = {
    tenK:CompanyTenK;
}

const TenKFinderItem = ({tenK}: Props) => {

  return (
    <Link
    reloadDocument
    to={tenK.linkXlsx.replace(
        "YOUR_API_KEY",
        process.env.REACT_APP_API_KEY!
    )}
    type="button"
    className="inline-flex items-center p-4 text-md text-white bg-lightGreen rounded-md"
    >
        10K - {tenK.symbol} - {tenK.fiscalYear}
    </Link>
  )
}

export default TenKFinderItem