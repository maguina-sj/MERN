//rfce
import React, {useState} from 'react' 

function Person(props) {
    const [getAge, setAge] = useState(props.age);
    return (
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {getAge}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick = {(event) => setAge(getAge + 1)}>Get Older!</button>
    </div>
    )
}

export default Person