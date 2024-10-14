import { useState } from 'react'
import './App.css'

function App() {
  const [todo, settodo] = useState([{
    title: "1",
    description: "do it"
  }, {
    title: "2",
    description: "do it"
  }, {
    title: "3",
    description: "do it"
  }
  ])
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
