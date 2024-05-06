import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useOutletContext } from 'react-router-dom';


const ClientCounteries = () => {
  const [countries, setCountries]= useOutletContext()

  return (
    <>
      <div style={{ display: "flex",width:"1400px",margin:"50px auto",gap:"20px" }}>
        {countries.map((country, idx) => {
          return (
            <div key={idx} ><Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={country.flagImg}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {country.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {country.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link  to={`/countries/${country.id}`}><Button size="small">Details</Button></Link>
                
              </CardActions>
            </Card></div>
          )
        })}</div>
    </>
  )
}

export default ClientCounteries
