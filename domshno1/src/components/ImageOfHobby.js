//? Da kreirame i treta komponenta kade kje imame nekoj tekst koj kje bide eve slika od moeto omileno hoby
//? da ima slika od hobito
//? da stavime css vnatre da toj tekst e oboen vo nekoja razlicna boja
//? i normalno slikata da ni bide vo razmer i toj css da bide importiran od nekoj nadvoresen css file
//? koga kje pomineme so mouse-ot vrz slikata da ispecatime vo konzola nekoj tekst (hello there!!!)

import React from "react";

function print() {
    console.log("Hello there!");
};

export const ImageOfHobby = () =>{
    return(
        <>
        <p>There is a picture below of my favourite hobby:</p>
        <img className="img-hobby" src="https://i.ytimg.com/vi/-5ql8--73wM/maxresdefault.jpg" onMouseOver={print} alt="image_of_colors_on_table"></img>
        </>
    );
};