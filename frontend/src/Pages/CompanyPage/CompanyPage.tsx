import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams<{ ticker: string }>();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(()=>{
    const getProfileInit = async () =>{
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  },[]);
  return (
    <>
      {company ? (
        <div className="company-profile-container">{company.companyName}</div>
      ) : (
        <div>Company Not Found!</div>
      )}
    </>
  );
};

export default CompanyPage