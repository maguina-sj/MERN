import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Update = (props) => {
    const{id} = useParams();
    const [name, setName] = useState('');
    const[genre, setGenre] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors/" + id)
        .then ( res => {
            setName(res.data.name)
            setGenre(res.data.genre)
        })
        .catch((err) => {
            console.log(err.response)
            
        })
    }, []) 

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name, 
            genre
        })
        .then( res => {
            console.log('the then part', res);
            if(res.data.error) {
                console.log(res.data)
            } else{            
                navigate('/')}
            
        })
        .catch(err => {
            console.log('catching the error', err);
            console.log('err dot response', err.response.data.errors)
            setErrors(err.response.data.errors) 
    })
}
  return (
    <div>
        <form onSubmit={updateAuthor}>
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

export default Update