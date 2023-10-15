import logo from './logo.svg';
import './App.css';
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { MovieInfo } from "./components/MovieInfo";
import { NewMovie } from "./components/NewMovie";
import { NotFound } from "./components/NotFound";
import { Route, Routes, Link } from "react-router-dom";

const movieInfo = [
  {id: 1, title: "DUNE", genre: "SF", rating: 9, image: <img src="https://image.tmdb.org/t/p/original/dXls45apB8CZD7E26w4WQoVg8XL.jpg" width={250} height={300}/>},
  {id: 2, title: "ERASERHEAD", genre: "SF", rating: 8.9, image: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Eraserhead.jpg/1024px-Eraserhead.jpg" width={250} height={300}/>},
  {id: 3, title: "Alien", genre: "SF", rating: 8, image: <img src="https://www.wallpaperup.com/uploads/wallpapers/2015/09/24/808945/8c73aee877b2b81000f7d5b54e9aaace.jpg" width={300} height={300}/>},
  {id: 4, title: "Elephant Man", genre: "SF", rating: 9.9, image: <img src="https://media.senscritique.com/media/000012268597/source_big/Elephant_Man.jpg" width={300} height={300}/>},
];

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies movieInfoList={movieInfo} />} />
        <Route path='/movies/:id' element={<MovieInfo oneMovieInfo={movieInfo}/>} />
        <Route path='/movies/new' element={<NewMovie />}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
      
      
    
  );
}

export default App;
