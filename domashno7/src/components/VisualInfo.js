import React from "react";
import { MovieContext } from "../App";

export const VisualInfo =()=>{
    const visualInfo = React.useContext(MovieContext);
    return(
        <>
          <a href={visualInfo.linkToTheTrailer}>Link to the official trailer</a>
          <br />
          {visualInfo.images.map((image, index)=>(
             <img key={index} src={image} style={{ width:500, height: 500}} />
          ))}  
        </>
    );
};