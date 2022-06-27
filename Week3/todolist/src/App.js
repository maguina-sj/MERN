import './App.css';
import {useState} from 'react';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTodo.length === 0) {
      return;
    }
    const todoItem = {
      text: newTodo,
      complete: false
    }
    setTodos([...todos, todoItem]);
    setNewTodo("");
  }
  const handleChange = (e) => {
    setNewTodo(e.target.value);
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
        todo.complete = !todo.complete;
        // to avoids mutating the todo directly, do the following:
        // const updatedTodos = {...todo, complete: !todo.complete};
        // return updatedTodos;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div>
      <form onSubmit= {(e) => {
        {handleSubmit(e);
        }}
      }>
        <label>Add a New Task:</label>
        <input type="text" value={newTodo} onChange={handleChange} />
          <div>
            <button>Add</button>
          </div> 
      </form>
          {todos.map((todo, i) => {
            const todoClasses = ["bold", "italic"];
            if (todo.complete) {
              todoClasses.push("line-through")
            }
            return <div key={i}>
              <input onChange={handleChecked(i)} checked={todo.complete} type="checkbox"/>
              <span className= {todoClasses.join(" ")}>{todo.text}</span>
              <button onClick = {handleDelete(i)}>Delete</button>
            </div>
          })
          }

    </div>
  ); 
}

export default App;
