import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // state? useState
  const [selectedId, setSelectedId] = useState();

  return (
    <div>
      <button onClick={function() { setSelectedId(1); }}>1</button>
      <button onClick={function() { setSelectedId(2); }}>2</button>
      <button onClick={function() { setSelectedId(3); }}>3</button>

      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
    .then(response =>{
      setTodo(response.data.todo);
    })
  },[id])
   
  return <div>
    <h1>
      {todo.title}
    </h1>
    <h2>
      {todo.description}
    </h2>
  </div>
}
