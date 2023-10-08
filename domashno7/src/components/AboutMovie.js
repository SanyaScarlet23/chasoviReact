import React from "react";
import { MovieContext } from "../App";

export const AboutMovie =()=>{
    const movieInfo = React.useContext(MovieContext);

    return(
        <>
          <p>Rating: {movieInfo.rating}</p>
          <p>Genre: {movieInfo.gener}</p>
          <p>Plot: {movieInfo.plot}</p>
          <p>Released Date: {movieInfo.releasedDate}</p>
        </>

    );
};