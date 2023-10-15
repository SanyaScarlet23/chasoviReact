import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const NotFound = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        }, 1000); //*ms
    });

    return (
        <>
          <h1>This page you looking for is missing!</h1>
          <Navigate to="/" />
        </>
    )
};

//?Ova navigate vednash ne redirektira kon stranata shto nie sakame da ja postavime, ne e link za kliknuvanje za da stasame i da ne nosi na posakuvanata strana, tuku avtomatski ne nosi
//?So navigate primer dobar e sledniot: da go odneseme user-ot na homepage koga vekje se logiral!!