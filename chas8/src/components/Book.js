import { useParams, useOutletContext } from "react-router-dom";

export const Book = () => {
    const bookList = [{}];

    // Ova id e ona shto se naogja vo app.js vo dinamichkata ruta za books
    // ova mora da bide istoto ime kako vo rutata od app.js
    const {id} = useParams(); //* Da znae koj book da go prikazhe
    const obj = useOutletContext();
    console.log(obj);

    return <h1>Book {id} - genre {obj.genre} - located on shelf number {obj.shelf}</h1>
};