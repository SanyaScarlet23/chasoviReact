import "./App.css";
import {Car} from "./components/Car";
import {ShowUserInfo} from "./components/ShowUserInfo";
import {NewForm} from "./components/NewForm";
import {useState} from "react";
 
function App() {
  return(
    <div className="App">
       <Car /> 
       <hr />
       <ShowUserInfo /> 
       <hr />
       <NewForm /> 
    </div>
  );
}

export default App;