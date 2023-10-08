import logo from './logo.svg';
import './App.css';
import React from "react";
import { Movie } from "./components/Movie";
import { VisualInfo } from "./components/VisualInfo";
import { Visitors } from "./components/Visitors";

export const MovieContext = React.createContext();

function App() {

  const visitors = [
    {name:"Ivan", surname:"Ivanovski"},
    {name:"Trajko", surname:"Trajkovski"},
    {name:"Stevo", surname:"Stevovski"},
    {name:"Ratko", surname:"Rajkov"},
    {name:"Mile", surname:"Milchev"},
    {name:"Boro", surname:"Borizovski"},
  ];

  return (
    <div className="App">
      <MovieContext.Provider value={{
        images: ["https://a.ltrbxd.com/resized/sm/upload/yr/85/5l/zp/dune-1200-1200-675-675-crop-000000.jpg?k=ed113c1da2", "https://image.tmdb.org/t/p/original/brwuG5I7PQe68iHwcGseFm9Ps9q.jpg", "https://image.tmdb.org/t/p/original/dXls45apB8CZD7E26w4WQoVg8XL.jpg"],
        rating: "PG-13",
        gener: "Sci-fi",
        plot: "In the far future, the known universe is ruled by the Padishah Emperor Shaddam IV. The most valuable substance in the empire is the spice melange, which extends life and expands consciousness. The spice also allows the Spacing Guild to fold space, allowing safe, instantaneous interstellar travel.",
        releasedDate: "December-14th-1984",
        linkToTheTrailer: "https://www.youtube.com/watch?v=KwPTIEWTYEI",
        visitors: visitors,
       }}>

        <Movie />
        <Visitors />
      </MovieContext.Provider>  
    </div>
  );
}

export default App;
