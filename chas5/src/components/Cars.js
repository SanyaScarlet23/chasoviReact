import { useState, useEffect } from "react";

export const Cars = () => {
    const [car1Votes, setCar1Votes]= useState(0);
    const [car2Votes, setCar2Votes]= useState(0);
    const [car3Votes, setCar3Votes]= useState(0);
    const [car4Votes, setCar4Votes]= useState(0);

    useEffect(() =>{
        if(car1Votes === 4){
            console.log("Toyota RAV4 is a car of the year")
        }
        if(car2Votes === 4){
            console.log("Zastava128 is a car of the year wins")
        }
        if(car3Votes === 4){
            console.log("Audi Q8 is a car of the year")
        }
        if(car4Votes === 4){
            console.log("Merceses G Class AMG is a car of the year")
        }

    }, [car1Votes, car3Votes]); // Ako sakame za site togash zapishuvame: [car1Votes, car2Votes, car3Votes, car4Votes]

    return(
     <div>
         <div>
            <img src="https://www.motortrend.com/uploads/sites/10/2015/11/2015-toyota-rav4-limited-2wd-suv-angular-front.png" style={{width: 150, height: 150}} />
            <br />
            <button onClick={()=>{setCar1Votes(car1Votes + 1);}}>Like</button>
            <br />
            <button onClick={()=>{setCar1Votes(car1Votes - 1);}}>Dislike</button>
            <br />
            <button onClick={()=>{setCar1Votes(car1Votes + 2);}}>Superlike</button>
            <h1>ToyotaRAV4 votes: {car1Votes}</h1>
            <br />
            <br />
        </div>
        <div>
            <img src="http://www.autodata1.com/media/zastava/pics/zastava-128-skala-[16286].jpg" style={{width: 150, height: 150}} />
            <br />
            <button onClick={()=>{setCar2Votes(car2Votes + 1);}}>Like</button>
            <br />
            <button onClick={()=>{setCar2Votes(car2Votes - 1);}}>Dislike</button>
            <br />
            <button onClick={()=>{setCar2Votes(car2Votes + 2);}}>Superlike</button>
            <h1>Zastava128 votes: {car2Votes}</h1>
            <br />
            <br />    
        </div>
        <div>
            <img src="https://netcarflix.sfo2.digitaloceanspaces.com/2018/09/2019-Audi-Q8-UK-31.jpg" style={{width: 150, height: 150}} />
            <br />
            <button onClick={()=>{setCar3Votes(car3Votes + 1);}}>Like</button>
            <br />
            <button onClick={()=>{setCar3Votes(car3Votes - 1);}}>Dislike</button>
            <br />
            <button onClick={()=>{setCar3Votes(car3Votes + 2);}}>Superlike</button>
            <h1>AudiQ8 votes: {car3Votes}</h1>
            <br />
            <br />    
        </div>
        <div>
            <img src="https://www.motorcarsofjackson.com/imagetag/111/12/l/Used-2017-Mercedes-Benz-G-Class-AMG-G-63-Jackson-MS.jpg" style={{width: 150, height: 150}} />
            <br />
            <button onClick={()=>{setCar4Votes(car4Votes + 1);}}>Like</button>
            <br />
            <button onClick={()=>{setCar4Votes(car4Votes - 1);}}>Dislike</button>
            <br />
            <button onClick={()=>{setCar4Votes(car4Votes + 2);}}>Superlike</button>
            <h1>Mercedes-Benz G Class AMG votes: {car4Votes}</h1>
            <br /> 
        </div>
     </div>
       

    );
};