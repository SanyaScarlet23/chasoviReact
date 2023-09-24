import { useState, useEffect } from "react";

export const NewForm = () => {
    const initialValues = { firstname:"", surname:"", email:"", password:"", age:"" };
    const [ formValues, setFormValues ] = useState(initialValues);
    const [ isSubmit, setSubmit ] = useState(false);

    //Za da ne odime na peshki koristime destrukcija na site vrednosti od objektot so negovite kluchevi
    let handleChange = (event) =>{
        console.log(event);
        console.log(event.target);

        const { name, value } = event.target;
        setFormValues({...formValues, [name]: value });
    };

    useEffect(()=>{
        console.log(initialValues)
    }, [initialValues.firstname, initialValues.surname, initialValues.email, initialValues.age]);

    let handleSubmit = (event) =>{
        event.preventDefault();
        setSubmit(true);
    }



    return (
        <div>
            <form>
                <div>
                    <div>
                        {/* <label>First Name</label> */}
                        <input 
                        name="firstname"
                        placeholder="Enter your name"
                        value={formValues.firstname}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        {/* <label>Surname</label> */}
                        <input 
                        name="surname"
                        placeholder="Enter your surname"
                        value={formValues.surname}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        {/* <label>Email</label> */} 
                       <input 
                       name="email" 
                       placeholder="Enter your E-mail address"
                       value={formValues.email}
                       onChange={handleChange}
                       />
                    </div> 
                    <div>
                        {/* <label>Enter your password */}
                        <input
                        type={formValues.password ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        value={formValues.password}
                        onChange={handleChange}
                        />
                    </div>  
                    <div>
                        {/* <label>Age</label> */}
                        <input name="age"
                        placeholder="Enter your ages"
                        value={formValues.age}
                        onChange={handleChange}
                        />
                    </div>
                </div>
               <button 
               onClick={handleSubmit}>Show Results</button>
            </form>
            {isSubmit && <div>
                              {
                                <table border={1}>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Age</th>
                                    </tr>
                                    <tr>
                                        <td>{formValues.firstname}</td>
                                        <td>{formValues.surname}</td>
                                        <td>{formValues.email}</td>
                                        <td>{formValues.password}</td>
                                        <td>{formValues.age}</td>
                                    </tr>
                                </table>
                              }
                               </div>}
        </div>

        );
};

