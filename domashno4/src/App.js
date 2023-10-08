import logo from './logo.svg';
import './App.css';
import { Student } from "./components/Student";
import { Semestar } from "./components/Semestar";
import { Counter } from "./components/Counter";

function App() {
  let students = [
    {name: "Sara", surname:"Sarova", index: 12345},
    {name: "Mira", surname:"Osogovska", index: 12345},
    {name: "Vera", surname:"Velkova", index: 12345},
    {name: "Mara", surname:"Markovska", index: 12345},
    {name: "Tina", surname:"Tinova", index: 12345},
    {name: "Sani", surname:"Sandova", index: 12345},
  ]; 

  return (
    <div className="App">
      <h2>Best students of the year 2022:</h2>
      <Student students={students} />
      <Semestar shouldShowSemestar={true} />
      <Counter />
      
    </div>
  );
}

export default App;
