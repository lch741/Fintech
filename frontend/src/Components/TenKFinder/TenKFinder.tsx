import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company';
import { getTenK } from '../../api';
import Spinner from '../Spinner/Spinner';
import TenKFinderItem from './TenKFinderItem/TenKFinderItem';


type Props = {
    ticker:string;
}

const TenKFinder = ({ticker}: Props) => {
    const[companyData,setCompanyData] = useState<CompanyTenK[]>();
    useEffect(()=>{
        const getTenKData = async() =>{
            const value = await getTenK(ticker);
            setCompanyData(value?.data);
        };
        getTenKData();        
    },[ticker]);
  return (
    <div className="incline-flex rounded-md shadow-sm m-4">
        {companyData?(
            companyData?.slice(0, 24).map((report:any)=>{if(report.period=="FY")
                return <TenKFinderItem tenK={report} />;
            })):(
            <Spinner />
        )}
    </div>
  );
};
export default TenKFinder