import {useState} from 'react'
import Form from '../components/Form'
import List from '../components/List'

const Main = () => {
    const [authors, setAuthors] = useState([])

    const removeFromDom = id => {
        setAuthors(authors.filter(author => author._id !== id));
    }

    return (
    <div>
        <Form authors ={authors} setAuthors={setAuthors}/>
        <List authors ={authors} setAuthors={setAuthors} removeFromDom={removeFromDom} />
    </div>
    )
}

export default Main




// how to make error validation messages appear
// props goes where and coming from where
// author's name must be unique and if not error validation message
