//? DOPOLNUVANJE NA DOMASHNA: Ne mi raboti najdobro dodavanje na nov film!!!!
// Da napraime da se prakjaat query parametri pri navigiranjeto do nov film, 
// mozete direktno vo propertyto vo Link za New Movie da gi stavite so ? 
// nesto kako <Link to="/movies/new?">New movie</Link>
// parametrite da bidat name (ime na film) i genre i potoa ovie query parametri da se zemat 
//vo komponetata za new movie i tamu da se prikazat vo nekoj html elementi

import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export const NewMovie = () => {
    const values = {title: "", genre: "", rating: ""};
    const [formValues, setFormValues] = useState(values);

    //? Query params
    const [ searchParams, setSearchParams ] = useSearchParams({title:"", genre:""});
    const title = searchParams.get("title");
    const genre = searchParams.get("genre");
   

    let handleChage = (event) =>{
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return(
        <>
           <form>
               <input type="text" name="title"
               placeholder="Enter the title of movie"
               value={formValues.title}
               onChange={handleChage} />
               <br />
               <input type="text" name="genre"
               placeholder="Enter the genre of move"
               value={formValues.genre}
               onChange={handleChage} />
               <br />
              
               <button onClick={handleSubmit}>Add movie to the list</button>

               <h3>{title}</h3>
               <p>{genre}</p>
           </form>

        </>
    )
};