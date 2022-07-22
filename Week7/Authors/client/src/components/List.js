import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const List = (props) => {
    const {removeFromDom, authors, setAuthors} = props;

    const deleteAuthor= (id) => {
        axios.delete('http://localhost:8000/api/authors/' + id)
        .then( res => {
            removeFromDom(id)
        })
        .catch( (err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then((res) => {
            console.log(res.data)
            setAuthors(res.data)
        })
        .catch( (err) => {
            console.log(err)
        })
    }, [])

    return (
    <div>
        {authors.map((author, i) => {
            return(
                <div key = {i}>
                    <p>{author.name}</p>
                    <Link to={`/authors/${author._id}`}>Edit</Link> 
                    <button onClick={(e) => {deleteAuthor(author._id)}}>Delete</button>
                </div>
            )
        })}

    </div>
    )
}

export default List