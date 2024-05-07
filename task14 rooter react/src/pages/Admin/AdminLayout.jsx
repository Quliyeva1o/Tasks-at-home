import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/Admin/Header'
import { Outlet, useNavigate } from 'react-router-dom'

import { getAll } from '../../API/requests'
import { endpoints } from '../../API/constants'
import useLocalStorage from 'use-local-storage'
const AdminLayout = () => {
  const [users, setUsers] = useState([])
  const [localAdminID, setLocalAdminID] = useLocalStorage('adminID', null)
  const [adminID, setAdminID] = useState(null)
  const [countries, setCountries] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getAll(endpoints.countries).then((res) => {
      setCountries(res.data)
    })
    getAll(endpoints.users).then((res) => {
      setUsers(res.data)
    })
    if (localAdminID == null) {
      navigate("/admin/login")
    }
  }, [localAdminID])

  return (
    <>
      <AdminHeader localAdminID={localAdminID}/>
      <Outlet context={[countries, setCountries, users, setUsers,setAdminID,setLocalAdminID]} />

    </>
  )
}

export default AdminLayout
