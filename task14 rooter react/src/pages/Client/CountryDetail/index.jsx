import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getOne } from '../../../API/requests'
import { endpoints } from '../../../API/constants'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CountryDetailClient = () => {
  const [country,setCountry]=useState([])
  const {id}=useParams()
  getOne(endpoints.countries,id).then((res)=>{
    setCountry(res.data)
  })

  const navigate=useNavigate()
  return (
    <>
       <div style={{margin:"50px auto" ,width:"1200px"}}>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={country.flagImg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div" >
                  Capital: {country.capital}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  Population:{country.population}
                </Typography>
        <Typography variant="body2" color="text.secondary">
        {country.description}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{
          navigate(-1)
        }}>Go back</Button>
      </CardActions>
    </Card>
       </div>
    </>
  )
}

export default CountryDetailClient
