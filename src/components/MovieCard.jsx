function MovieCard(props) {

    const {
        Title: title,
        Year: year,
        Poster: poster
    } = props; //деструктуризация с переименованием

    return(
        <div className="card">
            <div className="card-image">
                {poster === 'N/A' ? 
                <img src={`https://via.placeholder.com/200x300?text=${title}`} alt="img"/>
                : 
                <img src={poster} alt="img"/>}            
            </div>

            <div className="card-content">
                <span className="card-title">{title}</span>
                <span>{year}</span>
            </div>
        </div>
    )
}

export default MovieCard;