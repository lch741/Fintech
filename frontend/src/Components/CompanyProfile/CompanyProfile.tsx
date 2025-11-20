import React, { useEffect, useState } from 'react'
import { CompanyKeyMetrics } from '../../company';
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import { useOutlet, useOutletContext } from 'react-router';

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCap,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.returnOnEquityTTM,
  },
  {
    label: "Free Cash Flow To Equity",
    render: (company: CompanyKeyMetrics) => company.freeCashFlowToEquityTTM,
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData,setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(()=>{
    const getCompanyKeyMetrics = async() => {
      const value = await getKeyMetrics(ticker!);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyMetrics();
  },[])
  return (
    <>
      {companyData ?(
        <>
          <RatioList config={tableConfig} data={companyData} />
        </>
      ):(
        <h1>No data dound</h1>
      )}
    </>
  );
};

export default CompanyProfile