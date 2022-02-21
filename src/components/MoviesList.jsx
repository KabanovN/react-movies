import MovieCard from "./MovieCard";

function MoviesList(props) {
    const {movies} = props;

    return(
        <div className="moviesList">
            {movies.map(movie => (<MovieCard key={movie.imdbID} {...movie}/>))}
        </div>    
    )
}

export default MoviesList;