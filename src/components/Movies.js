import Movie from "./Movie";

const Movies = (props) => {
  return (
    <div className="Movies">
      {props.movies.map((movie) => {
        return <Movie key={movie.name} movie={movie} />;
      })}
    </div>
  );
};
export default Movies;
