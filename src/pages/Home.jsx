import React from 'react'
import DataVN from '../components/DataVN'
import CaseCity from '../components/CaseCity/CaseCity'
import Vaccine from '../components/vaccine/Vaccine'
import VaccineDetails from '../components/vaccine/VaccineDetails'
const Home = () => {
  return (
    <div>
      <DataVN />
      <CaseCity/>
      <Vaccine/>
      <VaccineDetails/>
    </div>
  )
}

export default Home