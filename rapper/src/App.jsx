import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
     <Cardwrapper>hi hello</Cardwrapper>
     <Cardwrapper>hi hello</Cardwrapper>
     <Cardwrapper>hi hello</Cardwrapper>
    </>
  )
}
 function Cardwrapper({children}){
  return  <div style={{border : "2px solid black"}}>
    {children}
  </div>
 }

export default App
