import MovieCard from './MovieCard';

function MoviesList(props) {
    const { movies = [] } = props;

    return (
        <div className='moviesList'>
            {movies.length ? (
                movies.map((movie) => (
                    <MovieCard key={movie.imdbID} {...movie} />
                ))
            ) : (
                <h5>Nothing found...</h5>
            )}
        </div>
    );
}

export default MoviesList;
