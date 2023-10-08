import React, { useState } from "react";

export const FormValidation = () =>{
    const initialValues = {name: "", surname: "", phone: ""};
    const [ formValues, setFormValues ] = useState(initialValues);
    const [isSubmit, setIsSubmit ] = useState(false);
    const [ formErrors, setFormErrors ] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate(formValues);
        setFormErrors(errors);
        if(Object.keys(errors).lenght === 0) {
            setIsSubmit(true);
        }
    };

    const showForm = () => {
        setIsSubmit(false);
        setFormValues("");
    };

    const validate = (values) => {
        const regex = /^\d{9}$/;
        const errors = {};
        if(!values.name) {
            errors.name = "First name is required!";
        } else if(values.name.length < 3) {
            errors.name = "Name is short, less then 3 char.";
        } else if(values.name.length > 20) {
            errors.name = "Nmae is longer then 20 char.";
        }

        if(!values.surname) {
            errors.surname = "Surname is required!";
        } else if(values.surname.lenght < 5) {
            errors.surname ="Surname is less then 5 char.";
        } else if(values.surname.lenght > 20) {
            errors.surname = "Surname is long more of 20 char.";
        }

        if(!values.phone) {
            errors.phone = "Phone number is required!";
        } else if(!regex.test(values.phone)) {
            errors.phone = "Entred number is not valid!"
        }
        return errors;
    };

    return(
        <>
          {!isSubmit ? (
            <form>

                <input 
                 name= "name"
                 type= "text"
                 placeholder="First name"
                 value={formValues.name}
                 onChabge={handleChange}
                />
                
                <p>{formErrors?.name}</p>
                <br />

                <input 
                 name="surname"
                 type="text"
                 placeholder="Surname"
                 value={formValues.surname}
                 onChange={handleChange}
                />
                
                <p>{formErrors?.surname}</p>
                <br />

                <input 
                 name="phone"
                 type="number"
                 placeholder="Phone Namber"
                 value={formValues.phone}
                 onChange={handleChange}
                />
                <br />
                <p>{formErrors?.phone}</p>
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>      
            </form>
           ) : ( <>
                   <h1>Form has been submitted successfully!</h1>
                   <button type="btn" onClich={showForm}>Show Form</button>
                 </>)
            }
        </>

    );
};