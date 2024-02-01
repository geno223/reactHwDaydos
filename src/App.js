import logo from './logo.svg'
import './App.css'
import Movies from './components/Movies'
function App() {

  const movies = [
    {
      name: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      image:<img src= "https://imgur.com/A8fsKlw.png"></img>
    },
    {
      name: "The Godfather",
      year: 1972,
      rating: 9.2,
      image: <img src="https://imgur.com/jbgvMSx.png"></img>
    },
    {
      name: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      image: <img src="https://imgur.com/aLciYpU.png"></img>
    },
    {
      name: "12 Angry Men",
      year: 1957,
      rating: 8.9,
      image: <img src="https://imgur.com/oWBAe7Q.png"></img>
    },
    {
      name: "Schindler's List",
      year: 1993,
      rating: 8.9,
      image: <img src ="https://imgur.com/79HPAcv.png"></img>
    }
   ];


  return (
    <div className="App">
      <Movies movies={movies}/>

    </div>
  );
}

export default App;
