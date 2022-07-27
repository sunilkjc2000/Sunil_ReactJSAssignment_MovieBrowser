import { library } from "@fortawesome/fontawesome-svg-core";
import IMovie from "../../../../models/IMovie";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import process from "process";
const baseUrl = "http://localhost:3002"
type Props = {
    movie: IMovie
}

const MovieItem = ( {movie } : Props) => {
    const {
        id,
        title,
        posterurl

    } = movie;
    return(
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={300} src={`${posterurl}`} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Button variant="primary">Add to Favourites</Button>
              </Card.Body>
            </Card>
          );
        
}

export default MovieItem;

