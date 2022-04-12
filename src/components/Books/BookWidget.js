import React, {useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function MediaCard() {

const [book, setBook] = useState(undefined); 

useEffect(() => {
axios.get("http://localhost:8081/book?book_id=56597885")
.then(response => {
    setBook(response.data);
});
},[]);

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="640"
        image={book?.cover}
        alt="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book: {book?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {book?.rating} 
          <br/> 
          Summary: {book?.synopsis}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
