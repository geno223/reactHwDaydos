import logo from './logo.svg'
import './App.css'
import Movies from './components/Movies'
function App() {

  const movies = [
    {
      name: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      image: "https://m.media-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwODA5MzY1MzE@._V1_SX300.png"
    },
    {
      name: "The Godfather",
      year: 1972,
      rating: 9.2,
      image: "https://m.media-amazon.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3Mw@@._V1_SX300.jpg"
    },
    {
      name: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    },
    {
      name: "12 Angry Men",
      year: 1957,
      rating: 8.9,
      image: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      name: "Schindler's List",
      year: 1993,
      rating: 8.9,
      image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTc0NF5BMl5BanBnXkFtZTcwNTM0NTY3Mg@@._V1_SX300.jpg"
    }
   ];


  return (
    <div className="App">
      <Movies movies={movies}/>

    </div>
  );
}

export default App;
