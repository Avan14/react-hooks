import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [todo, settodo] = useState([])

  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/todos').then( async(res)=>{
    //    const json = await res.json();
    //    settodo(json.todo);
    // })
    axios.get("https://sum-server.100xdevs/todos").then(function(res){
      settodo(res.data.todo)
    })
  },[])


  return (
    <div>
      <button onClick={add}>add a todo</button>
          <Todo title={todo}></Todo>

    </div>
  )
  function Todo({ title }) {
    return <div>
      {
        title.map((todo, index) => {
          return <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
  
          </div>
        })
      }
    </div>
  }
   function add(){
    settodo([...todo, {
      title: Math.random(),
      description: "do it"
    }])
   }
}
export default App
