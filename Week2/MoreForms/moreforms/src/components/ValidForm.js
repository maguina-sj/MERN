import React, {useState} from 'react';



const ValidForm = (props) => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirm, setConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");

        setHasBeenSubmitted(true);
    };
    const formMessage = () => {
        if(hasBeenSubmitted) {
            return "Thank you for submitting the form";
        }else{
            return "Welcome, please submit the form"
        }
    }
    
    return (

    <><form onSubmit={createUser}>
        
        <h3>{formMessage()}</h3>
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
        </div>    
            {firstName.length < 2 && firstName.length > 0 ? (<p>First Name must be at least 2 characters long</p>) : null}
        
        <div>
            <label htmlFor='lastName'>Last Name:</label>
            <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
        </div>
            {lastName.length < 2 && lastName.length > 0 ? (<p>Last must be at least 2 characters long</p>) : null}
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>    
            {email.length < 5 && email.length > 0 ? (<p>Email must be at least 5 characters long </p>) : null}
        
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
            {password.length <  8 && password.length > 0 ? (<p>Password must be at least 8 characters long</p>) : null}
        <div>
            <label htmlFor='confirm'>Confirm Password:</label>
            <input type="password" name="confirm" onChange={(e) => setConfirm(e.target.value)}></input>
        </div>
            {confirm !== password && confirm.length < 0 ? (<p>Passwords must match</p>) : null}

        </form>
        <input type="submit" value = "Create User"></input>
            </>

    )
}

export default ValidForm;