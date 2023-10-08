import logo from './logo.svg';
import './App.css';
import { User } from "./components/User";
import React from "react";
import { Homepage } from "./components/Homepage";
import { UserInfo } from "./components/UserInfo";
import { User2Context } from ".uttils/User2Context";
 
// bez ova nema da raboti!!! THIS IS THE CREATION OF THE CONTEXT
export const UserContext = React.createContext();

// export const User2Context = React.createContext();

function App() {
  const user = {
     name: "Martin",
     surname: "Trajkov",
     jobPosition: "Developer",
     hobby: "Movies",
     city: "Skopje",
     street: "Jane Sandanski",
     number: 222,
  };

  const movie = {
    name: "Shutter Island",
  };
  return (
    <div className="App">
      {/* <h1>Hello class7_React Contexts</h1> */}
      {/* <UserContext.Provider value="Laura" 
          <User />
          <UserContext.Provider value={user} */}
      {
        // We must use value in the provider it is reserved word
      }

     <User2Context.Provider value={{them: "dark", font: 22, role: "ADMIN", korisnik: user, film: movie}}>
       <Homepage />
       <UserInfo />
     </User2Context.Provider>
     {/* </KorisnikContext.Provider> */}
    </div>
  );
}

export default App;
