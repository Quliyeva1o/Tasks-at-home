import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from "@mui/material"
import { useNavigate, useOutletContext } from 'react-router-dom'
const AdminLogin = () => {
    const [countries, setCountries, users, setUsers, setAdminID,setLocalAdminID] = useOutletContext();
    const [admin, setAdmin] = useState({ username: '', password: '' })
    const navigate = useNavigate()
    console.log(users);
    console.log(admin);

    const handlesubmit = (e) => {
        e.preventDefault()
        const foundAdmin = users.find((x) => (
            x.username == admin.username &&
            x.password == admin.password &&
            x.role == "admin"
        ))
        console.log(foundAdmin);

        if (foundAdmin) {
            setAdminID(foundAdmin.id);
            setLocalAdminID(foundAdmin.id);
            toast.success("You are logged in")
            navigate('/admin')
        }else{
            toast.error("username or password is incorret")
            setAdmin({username:'',password:''})
        }
    }
    return (
        <>
            <form onSubmit={(e) => { handlesubmit(e) }} style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
                marginTop: "150px",
                gap: "15px"
            }}>
                <TextField  value={admin.username} onChange={(e) => { setAdmin({ ...admin, username: e.target.value }) }} id="outlined-basic" type='text' label="admin username" variant="outlined" />
                <TextField value={admin.password} onChange={(e) => { setAdmin({ ...admin, password: e.target.value }) }} id="outlined-basic" type='password' label="admin password" variant="outlined" />
                <Button variant='contained' type='submit'>Sign in</Button>
            </form>
            <ToastContainer />
        </>
    )
}

export default AdminLogin
