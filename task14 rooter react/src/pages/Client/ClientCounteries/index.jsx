import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useOutletContext } from 'react-router-dom';
import { Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


const ClientCounteries = () => {
  const [countries, setCountries] = useOutletContext()
  const [query, setQuery] = useState("")

  const filteredCountries = countries.filter((x) => {
   return x.name.toLowerCase().trim().includes(query.trim().toLowerCase())
  })
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <div style={{ display: "flex", gap: "18px", marginBottom: "30px" }}>
          <TextField onChange={(e) => { setQuery(e.target.value) }} id="outlined-basic" label="Search Country" variant="outlined" />

          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Sort By Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Age"
              onChange={() => { }}
            >
              <MenuItem disable selected value={""}>Sort By Name</MenuItem>
              <MenuItem value={"a-z"}>A-Z</MenuItem>
              <MenuItem value={"z-a"}>Z-A</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: "flex", width: "1400px", margin: "50px auto", gap: "20px" }}>
          {filteredCountries.map((country, idx) => {
            return (
              <div key={idx} ><Card sx={{ width: "300px" }}>
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

                </CardContent>
                <CardActions>
                  <Link to={`/countries/${country.id}`}><Button size="small">Details</Button></Link>

                </CardActions>
              </Card></div>
            )
          })}</div></Container>
    </>
  )
}

export default ClientCounteries
