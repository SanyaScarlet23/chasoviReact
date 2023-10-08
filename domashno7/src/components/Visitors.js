import React from "react";
import { MovieContext } from "../App";

export const Visitors =()=>{
    const { visitors } = React.useContext(MovieContext);

    return(
        <> 
         <h2>List of visitors:</h2>
         <ul>
            {visitors.map((visitor, index)=>(
                <li key={index}> {visitor.name} {visitor.surname} </li>

            ))}
         </ul>
         <hr />
        </>
    );
};