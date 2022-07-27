
import { Route, Switch } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import MovieDetails from './pages/MovieDetails';
import MoviesInTheater from './pages/MoviesInTheater';
import Favourites from './pages/Favourites';
import TopRatedIndian from './pages/TopRatedIndian';
import TopRatedMovies from './pages/TopRatedMovies';
import NavigationMenu from './NavigationMenu';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <NavigationMenu />
      <Container fluid>
        <Route path="/" exact>
          <MoviesInTheater />
        </Route>
        <Route path="/:id" exact>
          <MovieDetails />
        </Route>
        <Route path="/comingsoon" >
          <ComingSoon />
        </Route>
        <Route path="/topindianrated" >
          <TopRatedIndian />
        </Route>
        <Route path="/topRatedMovies" >
          <TopRatedMovies />
        </Route>
        <Route path="/favourites" >
          <Favourites />
        </Route>
        <Route path="/moviedetail" >
          <MovieDetails />
        </Route>
        </Container>
    </div>
  );
}

export default App;
