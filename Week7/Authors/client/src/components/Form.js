import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
    const {authors, setAuthors} = props;
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [errors, setErrors] = useState({})
    // make an error array I think or object if there is only one input

    const submitHandler =(e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/authors", {
            name,
            genre,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setName("");
            setGenre("");
            setAuthors([...authors, res.data])
        })
        .catch((err) => {
            console.log(err.response)
            setErrors(err.response.data.errors);
        })
    }

    return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
            { errors.name && <p>{errors.name.message}</p> }
            <label>Author's Name:</label>
            <input type="text" value={name} onChange={ e => setName(e.target.value)} />
            </div>
            <br/>    
            <label>Genre:</label>
            <input type="text" value={genre} onChange={ e => setGenre(e.target.value)} />
            { errors.genre && <p>{errors.genre.message}</p> }
            <button>Submit</button>
        </form>

    </div>
    )
}

export default Form