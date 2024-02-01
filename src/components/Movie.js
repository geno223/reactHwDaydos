const Movie = (props) => {

    return <div className="Movie">
        <div>
            <h1>{props.movie.name}</h1>
            <h1>Released: {props.movie.year}</h1>
            <h2>Rating: {props.movie.rating}</h2>
            <h4>{props.movie.image}</h4>
        </div>

    </div>
}

export default Movie