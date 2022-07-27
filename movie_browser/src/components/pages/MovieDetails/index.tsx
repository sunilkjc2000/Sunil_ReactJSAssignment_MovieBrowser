
import { useEffect, useState } from "react";
import IMovie from "../../../models/IMovie";
import { useParams } from "react-router-dom";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { getMoviesByID } from "../../../services/movies";


const MovieDetails = () => {
    const { id } = useParams<{id : string}>();
    const [ movies, setMovieDetail ] = useState<IMovie>(  );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState<Error | null>( null );

     useEffect(
        () => {
             const fetchMovieDetail = async() =>{
                try {
                   const movies = await getMoviesByID( parseInt( id ));
                   setMovieDetail( movies );
                }catch( error ){
                    setError( error as Error );
                }finally{
                    setLoading( false );
                }
                
             };
             fetchMovieDetail();
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
                        <Row >
                            <Col xs={12} className="my-2">
                             <h1>{movies?.title}</h1>
                           </Col>
                           <Col xs={12} lg={4} >
                             <img src={`${movies?.posterurl}`} />
                           </Col>
                           <Col xs={12} lg={8} >
                             <div>{movies?.storyline}</div>
                           </Col>
                        </Row>
                    )
            }
            </div>
            
    );
}


export default MovieDetails;