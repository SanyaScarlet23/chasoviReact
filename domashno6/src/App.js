import logo from './logo.svg';
import './App.css';
import { NewForm } from "./components/NewForm";
import { Car } from "./components/Car";
import { useState, useEffect } from "react";

function App() {

const [ cars, setCars ] = useState([
  { id: 1, text: "Audi", done:false},
  { id: 2, text: "Toyota", done:false},
  { id: 3, text: "Zastava128", done:false},
]);

const [ newCar, setNewCar ] = useState("");

useEffect(()=>{
  console.log(newCar)
}, [newCar]);

let addCar =()=>{
  let newCarObject ={ id: cars.length + 1, text: newCar, done:false};
  setCars([...cars, newCarObject]);
};

function markCarsForBuy(carSs){
  console.log(carSs);
  setCars([
    ...carSs.map(
      (item)=> item.id===cars.id ? {id: item.id, text:item.text, done: !item.done} : item
    ),
  ]);
 }

 function markCarsForSold(cars){
  console.log(cars);
  setCars([
    ...cars.map(
      (item)=> item.id===cars.id ? {id: item.id, text:item.text, done: item.done} : !item
    ),
  ]);
 }

 


  return (
    <div className="App">
      <h1>Cars for sale</h1>
      <br />
      <input placeholder='Enter New Brand'
      value={newCar}
      onChange={(event)=>{
        setNewCar(event.target.value);
      }}
      /><button onClick={addCar}>Add New Brand</button>
      <hr />
      <Car listOfCars={cars} markCarsForBuy={markCarsForBuy} />
      
      <h1>Owned cars</h1>
      {/*<Car listOfCars={CarS} markCarsForSold={markCarsForSold} />*/}
      
     {/* <NewForm /> */}
     {/*<Car /> */}
    </div>
  );
}

export default App;
