import { useState, useEffect ,} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function useTODO(){
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
   axios.get('server.hhtpsmfef')
   .then((res)=>{
    setTodos(res.data.todos);
   })
   return todos
  },[])

}

function App() {
   
  const todos = useTODO();
  return (
    <>
     {todos};
    </>
  )
}

export default App
