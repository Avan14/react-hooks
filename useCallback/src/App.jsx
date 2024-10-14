import { useState,useCallBack } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// used for memoization of funtions
function App() {
  const [count, setCount] = useState(0)
  
  var a= useCallBack(()=>{
    console.log("callback function called")
  })
  return (
    <div>
       <Some_comp param = {a}></Some_comp>
    </div>
  )
}

export default App
