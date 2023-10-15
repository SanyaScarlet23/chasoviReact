//*Tuka kje ja pravime listata
import { Link } from "react-router-dom";

export const Movies = (props) => {
    const movies = props.movieInfoList;
    return(
        <>
           <div>
            <ul className="movie-list">
                {movies.map((movieInfo)=> 
                     <li key={movieInfo.id}>
                         <Link to={`/movies/${movieInfo.id}`}>{movieInfo.title} is ({movieInfo.genre}) genre, with raiting {movieInfo.rating} {movieInfo.image}</Link> 
                    </li>)
                }
            </ul>
           </div>
           <div>
            <Link to="/movies/new?"><button id="newmovie">Add a new movie</button> </Link>
           </div>
        </>
    )
};