const Movie = (props) => {

    return <div className="Movie">
        <div>
            <h1>{props.movie.name}</h1>
            <h2>{props.movie.year}</h2>
            <h3>{props.movie.rating}</h3>
            <h4>{props.movie.image}</h4>
        </div>

    </div>
}

export default Movie