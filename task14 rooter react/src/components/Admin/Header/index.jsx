import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';


export default function AdminHeader({ localAdminID }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "red" }}>

        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {localAdminID ? "News" : "Login"}
          </Typography>
          {localAdminID &&
            <>
              <Button color="inherit"><Link to={"/admin"}>DashBoard</Link></Button>
              <Button color="inherit"><Link to={"/admin/add-country"}>Add Country</Link></Button>
              <Button color="inherit"><Link to={"/admin/countries"}>Countries</Link></Button></>
          }

        </Toolbar>


      </AppBar>
    </Box>
  );
}