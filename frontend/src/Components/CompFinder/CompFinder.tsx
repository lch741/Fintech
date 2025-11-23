import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../company';
import { getCompData } from '../../api';
import ComFinderItem from './ComFinderItem/ComFinderItem';

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
    },[]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4">
        {companyData?.map((comp:any)=>{
            return <ComFinderItem ticker={comp.symbol} />;
        })}
    </div>
  )
}

export default CompFinder