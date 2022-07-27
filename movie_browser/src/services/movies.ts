import axios from "axios";
import IMovie from "../models/IMovie";
const instance = axios.create({baseURL: 'http://localhost:3002'});
//export default instance

//const baseUrl = "http://localhost:3002/movies-in-theaters";
//axios.defaults.baseURL = "http://localhost:3002";
const getMovies = async() => {
    const response = await instance.get<IMovie[]>( "/movies-in-theaters");
    return response.data;
};

const getMoviesComingSoon = async() => {
    const response = await instance.get<IMovie[]>( "/movies-coming");
    return response.data;
};

const getTopRatedIndianMovies = async() => {
    const response = await instance.get<IMovie[]>( "/top-rated-india");
    return response.data;
};

const getTopRatedMovies = async() => {
    const response = await instance.get<IMovie[]>( "/top-rated-movies");
    return response.data;
};

const getMoviesByID = async(id:number) => {
    const response = await instance.get<IMovie>( `/movies-in-theaters/${id}`);
    return response.data;
};

export {
    getMoviesByID
}

export {
    getTopRatedMovies
}


export {
    getTopRatedIndianMovies
}

export {
    getMoviesComingSoon
}


export {
    getMovies
}