import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../company';
import { getCompData } from '../../api';
import ComFinderItem from './ComFinderItem/ComFinderItem';
import Spinner from "../Spinner/Spinner";

type Props = {
    ticker:string;
}

const CompFinder = ({ticker}: Props) => {
    const [companyData,setCompanyData] = useState<CompanyCompData[]>();
    useEffect(()=>{
        const getComps = async () =>{
            const value = await getCompData(ticker);
            setCompanyData(value?.data);
        };
        getComps();
    },[ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
        {companyData ? (
            companyData?.map((comp:any)=>{
            return <ComFinderItem ticker={comp.symbol} />;
        })
    ):(
        <Spinner />
    )}
    </div>
  );
}

export default CompFinder