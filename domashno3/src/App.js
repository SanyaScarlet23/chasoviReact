import logo from './logo.svg';
import './App.css';
import { Comments } from './components/Comments';
import { CommentsClass } from "./components/CommentsClass"


function App() {
  const comments =[
    {userId: 1, author:"Lile", text: "BlaBla"},
    {userId: 2, author:"Bile", text: "Vrrr"},
    {userId: 3, author:"File", text: "Mrrr"},
    {userId: 4, author:"Mile", text: "Brrrr"},
    {userId: 5, author:"Ole", text: "TlaLaLa"},
  ];

  return (
    <div className="App">
     <Comments comments={comments} />
     <hr />
     <CommentsClass comments={comments} />
     <hr />
    </div>
  );
}

export default App;
