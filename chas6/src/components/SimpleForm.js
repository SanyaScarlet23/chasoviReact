//Pa se navrakjame da gi importirame od react Use:state i effect bidejkji gi primenivme 
import { useState, useEffect } from "react";

export const SimpleForm = () => {
    // const [formaValue, setFormaValue] = useState("");
    const initialValues ={username:"", email:"", password:"", captcha:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);

   // const [username, setUsername] = useState("");
   // const [email, setEmail] = useState(""); // no vaka so milion ne e praktichno zatoa koristime kako niza od objects da se input-ite

   let handleChange = (e) => {
    // let name = e.target.name;
    // let value = e.target.value; ili ova so skratena sintaksa
    console.log(e.target);
    const {name, value} = e.target; // odnosno destrukturanje
    // ...formValue - ova pravi kopija na site propetija vo nov objekt
    // [name] : value - so ova go setirame propertyto(klucot)
    // sto nam ni treba
    setFormValues({ ...formValues, [name]: value });

    // Ova dokolku odime peski
    // if(name === 'username') {
    //     // change the username
    // }

    // if(name === 'email') {
    //     // change the email
    // }
   };

    return (
        <div>
            <form>
                <h1>Loging Form</h1>
                <div>
                    <div>
                        <label>Username</label>
                        <input 
                        name="username"
                        placeholder="enter username" 
                        value={formValues.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input name="email" 
                        placeholder="enter email" 
                        value={formValues.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                        name="password" 
                        placeholder="enter password" 
                        value={formValues.password}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            {
                // se sto ne e eksplicitno false ili empty e true
            }
            {isSubmit && <div>Signed in successfully</div>}
        </div>
    );
};