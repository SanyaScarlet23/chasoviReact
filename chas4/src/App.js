// First we need to install PropTypes: npm install prop-types --save
// Then we need to import them in the component: import PropTypes from "prop-types";
// And then we can use them in the format above

// ComponentName.propTypes = {nameOfProp: PropTypes.[typeOfProp]}
// for DefaultProps the format is
// ComponentName.defaultProps = {nameOfProp: [Value of prop]}

// Rules when using hooks
// React hooks cant be called inside loop, conditions or nested function
// React hooks are defined on the begining of our component
// They are called only from functional components
// React hooks can call other react hooks

// ZA DOMASNA
// Da napraime komponenta student koja kje ima ime/prezime / index
// neka ovaa komponenta gi pokazuva studentite vo nekoja tabela
// i taa lista da se prakja kako props od app.js
// da prakame pokraj listata uste property koe kje bide nekoj
// semestar i neka toj semestar se pokazuva na ekranot vo nekoj
// h1 element vednas posle tabelata

// Da stavime PropTypes na listata od studenti i neka taa lista bide
// required, neka ima propTypes i za semestarot

// Ako slucajno semestarot ne e praten, sekogas da se ispisuva
// tekstot zimski
import logo from './logo.svg';
import './App.css';
import {Car } from "./components/Car";
import {User} from "./components/User";
import {State} from "./components/State";
import {Dates} from "./components/Dates";

function App() {
  let cars = [
    {brand: "Ford", model: "Focus", year: 2009},
    {brand: "Tesla", model: "S", year: 2022},
    {brand: "Opel", model: "Corsa", year: 2015},
  ];

  let user = {
    name: "Sanya",
    age: 40,
  };

  let user1 = {
    name: "Laura",
    age: 25,
  };

  return (
    <div className="App">
     Hello Class!
     <Car vehicles={cars} />
     <User user={user} user1={user1} shouldShowUser={1} />
     <User user1={user1} />
     
     <br />
     <State /> 
     <Dates />
    </div>
  );
}

export default App;
