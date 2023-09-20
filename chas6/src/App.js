import logo from './logo.svg';
import './App.css';
import { Todo } from "./components/Todo";
import {useState, useEffect} from "react";
import { SimpleForm } from './components/SimpleForm';

function App() {

  // let todos = [
  //  {text: "Learn React", done: false},
  //  {text: "Go to the gym", done: false},
  //]; // dolu ova staveno e isto i za povikuvanje dolu e pochist code-ot


   // const [newTodo, setNewTodo] = useState("firstListOfTodos"); // prvin beshe useState("");

 const [todos, setTodos] = useState([
    {id: 1, text: "Learn React", done: false},  
    // id-ata gi dodavame za da mozheme da iznaogjame koe e done i da proveruvame 
    {id: 2, text: "Go to the gym", done: false},
 ])

 const [newTodo, setNewTodo] = useState("")

useEffect(()=>{
  console.log(newTodo);
}, [newTodo]);

// id-ito kje go dodademe i kje iskoristime lenght bidejkji rabotime so niza i ni e lesno
let addTodo =() =>{
  let newTodoObject = { 
    id: todos.lenght + 1,
    text: newTodo,
    done: false,
  };

  // ja kopira sodrzhintat na todos listata vp nova
  // no na podolg nachin, dodeka dolnovo e mnogu pokratko!!!
  // let newTodosList = [...todos]

  // potoa vo novata go stava i plus noviot objekt
  // i ja setira taa nova lista vo todos preku setTodos
  setTodos([...todos, newTodoObject]);

  // slednava sintaksa go pravi istoto kako i pogore
  // no na podolg nacin
  // let newTodosList = [...todos];
  // newTodosList.push(newTodoObject);
  // setTodos(newTodosList);
};

// Morame da go definirame kako funkcija vo App.js markTodoAsDone
function markTodoAsDone(todo) {
  console.log(todo);
  setTodos([
    ...todos.map(
      (item) =>
        item.id === todo.id // go barame kliknatiot element
          ? { id: item.id, text: item.text, done: !item.done }
          : // dokolku e najden kreirame nov objekt so promenet done status
            item // dokolku ne e najden si ostanuva istiot item
    ),
  ]);
}

  return (
    <div className="App">
      {/* <h1>Welcome to chas_6</h1>
      <input placeholder='Enter newTodo' 
      value={newTodo} 
      onChange={(e)=> {
        setNewTodo(e.target.value); 
      }}
      />
      <br />
      <button onClick={addTodo}>Add TODO</button>
      <hr />
      
      <Todo listOfTodos={todos} markTodoAsDone={markTodoAsDone} />
    */}

    <SimpleForm />
    </div>
  );
}

export default App;
