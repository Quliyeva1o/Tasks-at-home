import React, { useEffect, useState } from 'react'
import ClientHeader from '../../components/Client/Header'
import { Outlet } from 'react-router-dom'
import { getAll } from '../../API/requests'
import { endpoints } from '../../API/constants'

const ClientLayout = () => {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    getAll(endpoints.countries).then((res) => {
      setCountries(res.data)
    })
   },[])

  return (
    <>
    <ClientHeader/>
    <Outlet context={[countries, setCountries]}/>
    </>
  )
}

export default ClientLayout
