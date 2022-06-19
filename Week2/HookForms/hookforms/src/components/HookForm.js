import React, {useState} from 'react';



const HookForm = (props) => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirm, setConfirm] = useState("");

    
    return (

    <><form>
            <label htmlFor='firstName'>First Name:</label>
            <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor='lastName'>Last Name:</label>
            <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor='confirm'>Confirm Password:</label>
            <input type="password" name="confirm" onChange={(e) => setConfirm(e.target.value)}></input>
        </form><div>
                <h3>Your Form Data:</h3>
                <p>
                    <label>First Name:</label>{firstName}
                </p>
                <p>
                    <label>Last Name:</label>{lastName}
                </p>
                <p>
                    <label>Email:</label>{email}
                </p>
                <p>
                    <label>Password:</label>{password}
                </p>
                <p>
                    <label>Confirm Password:</label>{confirm}
                </p>
            </div></>

    )
}

export default HookForm;