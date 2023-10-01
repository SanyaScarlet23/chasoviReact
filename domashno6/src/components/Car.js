// Da imame nekoja pocetna lista so avtomobili 
// i da imame moznost za dodavanje na nov avtomobil vo taa lista. 
// Do sekoj avtomobil od listata da ima kopce Buy so koe bi se kupil avtomobilot 
//i bi se prefrlil vo drugata lista odnosno listata na Owned Cars

// BONUS: moze da se dodade za sekoj avtomobil 
// da ima quantity, odnosno kolku avtomobili postojat
// od toj tip i na toj nacin da se regulira 
// kolku od niv mozat da se kupat i dokolku se 
// kupeni site da go snema od listata za prodazba.

import React, {useState} from "react";

//* Definirame niza na avtomobili koi se dostapni za prodazba
// Sekoj avtomobil ima "id", "brand"(marka) i "quantity"(kolicina na dostapni avtomobili)
export const Car =()=>{
    const initialCarsForSale =[
        {id:1, brand:"Toyota", quantity: 4},
        {id:2, brand:"AUDI", quantity: 3},
        {id:3, brand:"Zastava", quantity: 2},
    ];
   
    //* Go koristite "useState" za cuvanje na sostojbata na komponentata
  // "carsForSale" ke sodrzi lista na avtomobili za prodazba, "ownedCars" ke sodrzi lista na avtomobili koi se kupeni, a "newBrand" ke go cuva tekstot od vneseniot nov brend na avtomobil
  const[newBrand, setNewBrand]=useState("");
  const[carsForSale, setCarsForSale]=useState(initialCarsForSale);
  const[ownedCars, setOwnedCars]=useState([]);

  //Koga korisnikot kje vnese tekst na poleto "Enter new brand", dolnava funkcija ja ayhurira sostojbata na "newBrand" so vrednosta na veseniot tekst
  const handleNewBrandChange =(event)=>{
    setNewBrand(event.target.value);
  };

  //Koga korisnikot kje klikne na kopcheto "Add New Brand" se sozdava nov object "newCar" i nie go definirame toj object vrz baza na predhodnta niza od objekti 
  const handleAddNewBrand=()=>{
    const newCar={id:carsForSale+1, brand:newBrand, quantity:1};
    //Tuka e nizata setCarsForSale od objekti e predhodnata niza plus sekoj object koj go dodavame 
    setCarsForSale([...carsForSale, newCar]);
    setNewBrand("");
  };

  //So klikanje na kopcheto BUY nie sakame da kreirame nova niza i da ja azhurirame istata taa lista sega kje e novata za ownedCars
  const handleBuy =(avto)=>{
    //Kreirame nova niza t.e updated niza koja kje ja izminuva so map metodh-ot predhodno definiranata odnosno carsForSale
    const updatedCarsForSale = carsForSale.map((copy)=> copy.id === avto.id ?{...copy, quantity: copy.quantity -1} : copy);

    //Morame da kreirame za ispitvanje dali ima takva kola sporeduvajkji so id-to na avtomobilot i da zadademe uslov if-else ako go ima da go dodava ako ne da kreira nov object 
    const ownedCar = ownedCars.find((copy)=> copy.id ===avto.id);

    if(ownedCar){
        ownedCar.quantity += 1;
    }else{
        setOwnedCars([...ownedCars, {id: avto.id, brand:avto.brand, quantity: 1}]);
    }
    
    //Tuka ja azhurirame nizata so novata updatirana niza!
    setCarsForSale(updatedCarsForSale);
  };

  //Sega koga korisnikot kje klikne na kopcheto "sell" treba da se azhurira sostojbata na nizata "ownedCars" za da se namali kolichinata na prodadeniot avtomobil
  const handleSell = (avto)=>{
    const updatedOwnedCars = ownedCars.map((copy)=> copy.id === avto.id ? {...copy, quantity: copy.quantity -1} : copy);
    //Tuka ja azhurirame nizata vo State-ot so novite izmeni koi sme gi ispatale pogore vo novo definiranata constanta updatedOwnedCars!
    setOwnedCars(updatedOwnedCars);
  };

  return(
    <>
      <h1>Cars for sell</h1>
      <input type="text" placeholder="Enter new brand" value={newBrand} onChange={handleNewBrandChange} />
      <button onClick={handleAddNewBrand}>Add New Brand</button>
 
      <ol>
        {carsForSale.map((avto)=>(
            <li key={avto.id}>
                {avto.brand} - {avto.quantity} available
                <button onClick={()=> handleBuy(avto)}>BUY</button>
            </li>
        ))}
      </ol>

      <h1>Owned Cars</h1>
      <ol>
        {ownedCars.map((avto)=>(
            <li key={avto.id}>
                {avto.brand} - {avto.quantity}
                <button onClick={()=> handleSell(avto)}>SeELL</button>
            </li>
        ))}
      </ol>
    </>
  )
}
