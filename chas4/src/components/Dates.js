import { useState } from "react";

export const Dates = () => {
    // we always must set new array in the state
    // This is a must for evry type
    const [dates, setDates ] = useState([]);

    const addDate = () => {
        // creating object from the current date
        let date = new Date().toString();
        // ... spread operator
        // site postoechki dati shto gi imame vo dates gi kopirame i stavame vo novata niza newDates
        var newDates = [...dates];

        // ja dodavame novata data
        newDates.push(date);
        console.log(newDates);
        console.log(Dates);
        // gi setirame dates zaedno so novata data
        setDates(newDates);
    };

    return (
        <div>
            <h1>My favourite Dates:</h1>
            {dates.map((date, index) => {
                return <p key={index}>{date}</p>;
            })}

            <button onClick={addDate}>Add Date</button>
        </div>
    );
};