import './App.css';
import {useState} from 'react';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // const [test, setTest] = useState([{text: "2432", completed: false}, {text: "2432", completed: false}]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTodo.length === 0) {
      return;
    }
    const todoItem = {
    text: newTodo,
    completed: false
  }
    setTodos([...todos, todoItem]);
    console.log(newTodo);
    console.log(todoItem);
    console.log(todos)
    setNewTodo("");
  }

  const handleDelete = (delIndex) => {
    const filteredTodos = todos.filter((_todo, i) => {
      return i !== delIndex;
    });
    setTodos(filteredTodos);
  }
  const handleChecked = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.completed = !todo.completed;
        // to avoids mutating the todo directly, do the following:
        // const updatedTodos = {...todo, complete: !todo.complete};
        // return updatedTodos;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
console.log(todos)
  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <label>Add a New Task:</label>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} name="newTodo" />
          <div>
            <button>Add</button>
          </div> 
      </form>

          {todos.map((todo, i) => {
            const todoClasses = ["bold", "italic"];
            if (todo.completed) {
              todoClasses.push("strike-through")
            }
            return (<div key={i}>
              <input onChange={(e) => {handleChecked(i)}} checked={todo.completed} type="checkbox"/>
              <span className= {todoClasses.join(" ")}>{todo.text}</span>
              <button onClick = {(e) => {handleDelete(i);}}>Delete</button>
            </div>)
          })
          }
    </div>
  ); 
}

export default App;
