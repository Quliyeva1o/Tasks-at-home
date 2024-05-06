import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  deleteOne, getOne } from '../../../API/requests';
import { endpoints } from '../../../API/constants';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';

const CountryDetail = () => {
  const [country, setCountry] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOne(endpoints.countries, id)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((error) => {
        console.error('Error fetching country:', error);
      });
  }, [id]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOne(endpoints.countries, id)
          .then(() => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success'
            });
          })
          .catch((error) => {
            console.error('Error deleting country:', error);
          });
      }
    });
  };

  return (
    <div style={{ margin: '50px auto', width: '1200px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={country.flagImg} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {country.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>{handleDelete(country.id)}} size="small">
            Delete
          </Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CountryDetail;
