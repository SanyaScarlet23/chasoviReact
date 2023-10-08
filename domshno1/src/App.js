import logo from './logo.svg';
import './App.css';
import { ClassExample } from './components/ClassExample';
import { MyHobbies } from './components/MyHobbies';
import { MyFavouriteHobby } from './components/MyFavouriteHobby';
import { ImageOfHobby } from './components/ImageOfHobby';


function App() {
  return (
    <div className="App">
      <ClassExample />
      <MyHobbies />
      <MyFavouriteHobby />
      <ImageOfHobby />  
    </div>
  );
}

export default App;
