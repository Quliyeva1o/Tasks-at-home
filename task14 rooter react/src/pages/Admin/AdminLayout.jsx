import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/Admin/Header'
import { Outlet } from 'react-router-dom'

import { getAll } from '../../API/requests'
import { endpoints } from '../../API/constants'
const AdminLayout = () => {
  const [countries, setCountries] = useState([])
 useEffect(()=>{
  getAll(endpoints.countries).then((res) => {
    setCountries(res.data)
  })
 },[])
  return (
    <>
      <AdminHeader/>
      <Outlet context={[countries, setCountries]} />
      
    </>
  )
}

export default AdminLayout
