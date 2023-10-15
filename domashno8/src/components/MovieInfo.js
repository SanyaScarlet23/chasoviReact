import React from "react";
import { useParams } from "react-router-dom";

export const MovieInfo = (props) => {
    const {id} = useParams();
    const movieInfo = props.oneMovieInfo.find((movieInfo)=> movieInfo.id === Number(id));
    return(
        <>
           <h1>Movie Details</h1>
           <p>Name: {movieInfo.title} </p>
           <p>Genre: {movieInfo.genre}</p>
           <p>Rating: ★{movieInfo.rating}</p>
           <p>Image: {movieInfo.image}</p>
        </>
    )
};