import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';


export default function Weather() {
    const[weather, setWeather] = useState(undefined);

    useEffect(()=>{
        axios.get("http://localhost:8084/weather?lat=39.683723&lon=-75.749657")
        .then(response => {
            setWeather(response.data);
        });
    },[]);

    console.log("Value of Weather:",weather);
    return (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Todays Forcast
                    </Typography>
                    
                    <Typography variant="h5" component="div">
                        {weather?.main?.temp}
                    </Typography>
                    <Typography variant="body2">
                        City : { weather?.name}
                        <br />
                        Temperature : {weather?.main?.temp}
                        <br/>
                        Feels Like : {weather?.main?.feels_like}
                        <br/>
                        Humidity : {weather?.main?.humidity}
                
                    </Typography>
                </CardContent>
            </React.Fragment>
            </Card>
    </Box>
    );
}

























