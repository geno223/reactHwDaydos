import Movie from "./Movie";

const Movies = (props) => {

    return <div className="Movies">
        
        {props.movies.map((movie) => {
            return <Movie movie={movie} key={movie.name}/>
        })}

    </div>
}
export default Movies