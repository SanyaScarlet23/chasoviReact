// arrow function
// in functional components we do not have import
// react takes care of that out of the box

import { HelloInMacedonian } from "./HelloInMacedonian";

//
export const Hello = () => {
    return (
        // inside jsx the html elemets must always be in a parent element
        // such as div element or fragment (<>)

        <>
        <h1>Hello</h1>
        <h2>Sanya Kostovska</h2>
        <HelloInMacedonian />
        </>
    );
};