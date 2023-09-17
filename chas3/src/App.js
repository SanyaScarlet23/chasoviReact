import logo from './logo.svg';
import './App.css';

function App() {
  let sportAndPeople = [
    { name: "Martin", sport: "Football" },
    { name: "Laura", sport: "Tenis" },
    { name: "Vedran", sport: "Table Tenis" },
    { name: "Bobi", sport: "Handbal" },
  ];

  // Da napravime komponenta vo koja kje prikazheme
  // komentari, neka sekoj komentar ima id, author,
  // text. Neka listat so komentari ja imame vo app.js
  // i pratite preku probs vo kreiranata komponenta
  // i tamu d agi prikazheme informaciite
  // neka bidat vo nekoja tabela
  // pokraj ova imame nekoe kopche LIKE shto vo kozola kje pechati +1

  let gamer = {
    firstName: "Martin",
    score: 5,
    print: function () {
      // when we use `` we can write regular string and inside
      // if we want to use javascript we use ${}
      console.log(`name: ${gamer.firstName} - score: ${gamer.score}`);
    },
  };

  let student = {
    name: "Martin",
    lastName: "Trajkov",
    index: 155025,
  };

  let student2 = {
    name: "Kole",
    lastName: "Vasilev",
    index: 1111111,
   };

   // console.log(player),
   // Da go konvertirame istiot primer od chasot (primerot za komentarite)
   // i da go napravime vo klsana komponenta

   //installing props-typesr so dolnava komanda:
   // npm install props-types --save
  return (
    <div className="App">
      {/* <h1>Hello from React props</h1> */}
      <Sport />
       {/* <Sport name="Martin" sport="Tenis" /> */}
      {/* <Sport name="Laura" sport="Tenis" />
      <Sport name="Vedran" sport="Table Tenis" /> */}
      {/* <Sport />
      <Sport2 />
      <Sport3 /> */}
      {/* <Sport2 name="Laura" sport="Tenis" /> */}
      {/* {sportsAndPeople.map((object) => {
        return <Sport name={object.name} sport={object.sport} />;
      })} */}
      {/* <Sport3 sports={sportsAndPeople} /> */}
      {
        // Player is the component name
        // igrac is the object that is located inside props
        // gamer is the javascript object
      }
      {/* <Player igrac={gamer} /> */}
      {/* <StudentClass student={student} />
      <StudentClass student={student2} /> */}
      <File />
     
    </div>
  );
}

export default App;
