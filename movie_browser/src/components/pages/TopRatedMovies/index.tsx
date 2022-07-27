
import { useEffect, useState } from "react";
import IMovie from "../../../models/IMovie";
import { getTopRatedMovies } from "../../../services/movies";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import MovieItem from "./MovieItem";

const TopRatedMovies = () => {
    const [ movies, setTopRatedMovies ] = useState<IMovie[]>( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState<Error | null>( null );

     useEffect(
        () => {
             const fetchTopRatedMiovies = async() =>{
                try {
                   const movies = await getTopRatedMovies();
                   setTopRatedMovies( movies );
                }catch( error ){
                    setError( error as Error );
                }finally{
                    setLoading( false );
                }
                
             };
             fetchTopRatedMiovies();
        },[] // This ensures the effect runs ONLY on first page load
     )
    return (
        <div>
            {
                loading && (
                            
                    <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }
            {
                 !loading && error && (
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                )
            }
            {
                    !loading && !error && (
                        <Row xs={2} lg={6}>
                            {
                                movies.map(
                                    movie => (
                                        <Col keys={movie.id}>
                                           <MovieItem movie={movie}/>
                                        </Col>
                                    )
                                )
                            }
                        </Row>
                    )
            }
            </div>
            
    );
}


export default TopRatedMovies;