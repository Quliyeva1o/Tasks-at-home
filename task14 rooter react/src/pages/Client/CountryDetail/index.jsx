import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
        <Typography variant="body2" color="text.secondary">
        {country.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
       </div>
    </>
  )
}

export default CountryDetailClient
