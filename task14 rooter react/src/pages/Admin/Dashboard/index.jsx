import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Dashboard = () => {
  const[counries,setCountries]=useOutletContext()
  return (
    <div>
      Dashboard:{counries.length}
    </div>
  )
}

export default Dashboard
