//import logo from './logo.svg'; :logo kullanmıycaz 
import { useState } from 'react';
import './App.css';

function App() {
  const[title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      title: "Apply for a job",
      isDone: false
    },
    {
      title: "Wash dishes",
      isDone: false  
    },
    {
      title: "Do laundry",
      isDone: true
    }
  ])

  const handleSubmit = function(event) {
    event.preventDefault();
    const newTodos = [...todos, {title: title, isDone: false}];
    newTodos.sort((a,b) => a.isDone - b.isDone);
    setTodos(newTodos);
    setTitle("");
  };

  const updateItem = function(event, index) {
    const newTodos=[...todos];
    newTodos[index].isDone=event.target.checked;
    newTodos.sort((a,b) => a.isDone - b.isDone);
    setTodos(newTodos);
  };

  const deleteItem=function(event,index){
    event.preventDefault();
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
     <h1>TO DO LIST</h1>
     <form onSubmit={handleSubmit}>   
       <input type="text" className="New-todo" placeholder="Do something.." 
       value={title} onChange={(e) => setTitle(e.target.value)} />
     </form>
     <ul className='App-todos'>
       {todos.map((x,i) => 
       <li key={i} className = {"Todo-item " + (x.isDone ? "Done" : "Undone")}>
         <input type="checkbox" className='Todo-check' checked={x.isDone} onChange={(e) => updateItem(e, i)}/>
         <span className='Todo-title'>{x.title}</span>
         <a href="#" className='Todo-delete' onClick={(e) => deleteItem(e, i)}>&times;</a>
         </li>
         )}
     </ul>
    </div>
  );
}

export default App;
