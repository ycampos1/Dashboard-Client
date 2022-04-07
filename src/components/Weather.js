import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function Weather() {
const[weather, setWeather] = useState(undefined);

    useEffect(()=>{
    axios.get("http://localhost:8080/weather?lat=39.8&lon=75")
    .then(response=>{
        console.log(response.data)
    });

},[]);

  return (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Todays Forcast
                    </Typography>
                    <Typography variant="h5" component="div">
                        59.6
                    </Typography>
                    <Typography variant="body2">
                        Sunrise : 5:30am
                        <br />
                        Sunset : 7:30 pm
                    </Typography>
                </CardContent>
            </React.Fragment>
         </Card>
    </Box>
  );
}


























