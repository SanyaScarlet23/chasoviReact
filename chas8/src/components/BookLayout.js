import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

export const BookLayout =() =>{
    // const [number, setNumber] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams({n: 3});
    console.log(searchParams);
    const number = searchParams.get("n");
    const firstName = searchParams.get("name");

    return (
        <>
           <Link to="/books/1">Book 1</Link><br />
           <Link to="/books/2">Book 2</Link><br />
           <Link to="/books/3">Book 3</Link>
           <br />
           <br />
           <Link to={`/books/${number}`}>Book {number}</Link>
           <br />
           <input type="number" value={number} onChange={(event)=> setSearchParams({n: event.target.value})} />

           <p>{firstName}</p>

           <Outlet context={{shelf: "3B", genre: "Thriller"}} />
        
        </>

    )
};

//*Objasnuvanje: So Outlet se prikazhuva se drugo shto postoi vo komponentite osven site gore elementi (menito) vo layout-ot
//* Outlet: se koristi za prikaz na konkretnite komponenti koi se prikazhuvaat posle spodeluvaniot UI
//* Query params: se shto odi vo URL posle ? - Ova dosta kje se koristi za kveriranje na nekoi ruti