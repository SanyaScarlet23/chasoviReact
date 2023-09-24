
export const Car = ({ listOfCars, markCarsForBuy}) => {
    return(
        <div>
            <ol>
            { listOfCars.map((car, i)=>{
                return(
                    <li key={i}>
                    <span>{car.text}</span>
                    <button  value={car.done} /*onClick={()=>{setCars(cars -1)}}*/ onChange={()=>{markCarsForBuy(car)}}>Buy</button>
                    </li>
                );
            })}
            </ol>
        </div>

    );

};


export const CarS = ({ listOfCars,  markCarsForSold}) => {
    return(
        <div>
            <ol>
            { listOfCars.map((car, i)=>{
                return(
                    <li key={i}>
                    <span>{car.text}</span>
                    <button  value={car.done}  onChange={()=>{markCarsForSold(car)}}>Sold</button>
                    </li>
                );
            })}
            </ol>
        </div>

    );

};