import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function MoviesWidget() {
  const [movies, setMovies] = useState(undefined);
  const [index, setIndex] = useState(0);
  const [currentMovie, setCurrentMovie] = useState(undefined);

  useEffect(()=>{
    axios.get("http://localhost:8081/movies")
    .then(response => {
      setMovies(response.data);
      setCurrentMovie(response.data[0]);
    });
  },[]);

  const requestNewMovie = () => {
    const size = movies.length;
    const nextIndex = index +1;
    if(nextIndex >size){
      setCurrentMovie(movies[0]);
      setIndex(0);
    }else{
      setIndex(nextIndex);
      setCurrentMovie(movies[nextIndex])
    }
    }
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        
        </Typography>
        <Typography variant="h5" component="div">
         {currentMovie?.title} 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Url: <a href={currentMovie?.url}>{currentMovie?.url}</a>  
        </Typography>
        <Typography variant="body2">
        Website: {currentMovie?.site}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={requestNewMovie}>Next</Button>
      </CardActions>
    </Card>
  );
}
