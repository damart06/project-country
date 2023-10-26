import React, { useState } from 'react'
import './App.css'
import { Alert, AlertTitle, AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, TextField, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import axios from 'axios'
import { Interface } from 'readline'



interface CountryInfo {
  name: {
    common: string;
  };
  population: number;

  flag:string;

  capital: string;

  region: string;

  area : string; 

 
  
}


function App() {

  
  const [country, setCountry] = useState('')
  const [responseData, setResponseData] = useState<CountryInfo[]>([])

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2A7B6D', 
      },
    },
  });
 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const data = await axios.get<CountryInfo[]>(`http://localhost:4000/getCountry/${country}`)
      setResponseData(data.data);
      
    } catch (error) {
      
      alert(error)
    }
  }
  

 


  return (
    <div>
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Countries Informations
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>

      
      
    <form style={{width: "100vw", height: "50vh"}} onSubmit={handleSubmit}>
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center">
          <Stack direction="row" gap={2}>
            <TextField
              label="Country"
              variant="outlined"
              value={country}
              onChange={event => setCountry(event.target.value)}
            />
            <Button type='submit' variant="outlined">Submit</Button>

            
          </Stack>
      </Stack>
     
    </form>
    
   

    <Card sx={{ maxWidth: 345, height: 500,  marginLeft: 95, marginTop : -20}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="img/flags.png"
          
        />
        <CardContent>
          <Typography variant="h5" component="div">
              {responseData.map((country, index) => (
                <p key={index}>
                <p>{country.name.common}</p>
                </p>
              ))}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          {responseData && (
            <div>

           
              {responseData.map((country, index) => (
                <p key={index}>
                <p>Population: {country.population}</p>
                <p>Capital: {country.capital}</p>
                <p>Flag : {country.flag}</p>
                <p>Region: {country.region}</p>
                <p>Area: {country.area}</p>
                
                
                </p>
              ))}
       
            </div>
          )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>

  

    
  )

}



export default App
