interface IMovie {
    id: String,
    title: String,
    year: String,
    genres: String[],
    ratings: number[],
    poster: String,
    contentRating: String,
    duration: String,
    releaseDate: String,
    averageRating: Number,
    originalTitle: String,
    storyline: String,
    actors: String[],
    imdbRating: String,
    posterurl: String
}

export default IMovie;