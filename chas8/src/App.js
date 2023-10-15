import './App.css';
import { Home } from "./components/Home";
import { NewBook } from "./components/NewBook";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NotFound } from "./components/NotFound";
import { BookLayout } from "./components/BookLayout";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import "./css/style.css";

//* React Router (BROWSER ROUTER)- SE STAVA KAKO CONTEXT VO NAJVISOKATA KOMPONENTA T.E (PARENT) A TOA E: index.js
// instaliranje: npm i react-router-dom --save
//BITNO: Isto i Link se importira prku router dom 
//?Ovoj se koristi 90% vo sluchaevite

// element- shto kje se prikazhe na ekran; vo element se stava koja strana da se prikazhe
// path- kako kje izgleda nasheto URL

//* Hash Router: ima # pred patekata,na primer: /#/books
//* History router: celoto navigiranje napred-nazad 
//* Memory Router: namesto da chuva vo rutata kade sme bile go chuva vo memorija, i se koristi za testiranje
//* Static Router: se koristi za server renderi i toa go pravi preku property location, na primer: <StaticRouter location= "/books"> i ne se koristi za navigiranje od strana na strana ovoj vid na StaticRouter e poseben!
//* Native Router: se koristi za mobile apps i se instalira posebno kako i browser router!


function App() {
  //* Rutite mozheme da gi napravime i preku JS, ne mora da se preku JSX, na primer:
  // let element = useRoutes([
  //  {path: "/", element: <Home /> },
  //  {path: "*", element: <NotFound /> },
  //  {path: "/books", element: <BookLayout />, children: {index: true, element: <BookList />}}
  // ]);
  return (
    <div className="App">
      {/* Ako odime so JavaScript togash rutite se prikazhuvaat tuka  */}
      {/* {element} */}

      {/* Ova go stavame ako sakame da stavime na odreden url dopolnitelni raboti na primer kako banners ili nekoe meni- React go dozvoluva toa odnosno da imame povekje ruti so ista pateka */}
      <Routes>
        <Route path="/books/new" element={<h1>Some extra content</h1>} />
      </Routes>

      {/* Ova odi najchesto nadvor od Routes za da se prikazhuva postojano nav iako se menuvaat stranite- pages */}
      <nav>
        <ul>
          {/* replace: ja menuva rutata vo istorijata na browser-ot, ova e korisno koga sme na nekoja loging strana: se vrakja i ne ja pameti poslednata ruta tuku odi na predposlednata */}
          <li><Link to="/" replace>Home</Link></li>

          {/* Ima zamena na Link i toa e NavLink, se koristi vo sluchai kako shto e menu */}
          <li><NavLink style={({isActive}) => {
            return isActive ? {color:"red"} : {color: "blue"}
          }} to="/" replace>Home with NavLink</NavLink></li>

          {/* reloadDocument: pravi reload na cela strana, primer koga sakame app-ito da povikuva odnovo API */}
          <li><Link to="/books" reloadDocument>Books</Link> </li>

          {/* moze i vaka ama podobro e Link da se koristi; so ova se refreshira cela strana i taka e po bavna */}
          {/* <li><a href='/books'>Books with anchor</a></li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book/>} />
        <Route path='/books/new' element={<NewBook/>}/> */}

    {/* // site ruti sto imaat ist pocetok primer so /books moze da gi grupirame. zamena za tie gore */}
    {/* BookLayout ke se prikazuva na site ruti sto zapocnuvaat so /books */}
    {/* Child rutite bi se prikazuvale preku outletot sto go imame vo book layout */}
        <Route path='/books' element={<BookLayout />}>
          <Route index element={<BookList/>} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook/>} />
        </Route>

        {/* Dokolku ruterot ne fati nit edna ruta od gore definiranite, togash kje se ispechati ova */}
        <Route path='*' element={<NotFound/>}/>


      </Routes>  
    </div>
  );
}

export default App;
