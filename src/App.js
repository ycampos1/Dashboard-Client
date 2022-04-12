import logo from './logo.svg';
import './App.css';
import Weather from "./components/Weather/Weather";
import { Grid } from '@mui/material';
import MoviesWidget from './components/Movie/MoviesWidget';
import BookWidget from './components/Books/BookWidget';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3}>
        <Weather></Weather>
      </Grid>
      <Grid item lg={3}>
      <MoviesWidget></MoviesWidget>
     </Grid>
     <Grid item lg={3}>
      <BookWidget></BookWidget>
      </Grid>
    </Grid> 
  );
}

export default App;
