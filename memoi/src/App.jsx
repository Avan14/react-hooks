import React,{ useState } from 'react'
import './App.css'

function App() {

  const [name,setname]=useState("my name is mandu");
  function updatetitle(){
   setname("my name is "+Math.random());
  }
  return (
      <div>
       <button onClick={updatetitle}>update title</button>
        <Header title="avan"></Header>
        <Header title={name}></Header>
        <Header title="aavan"></Header>
      </div>
  )
}
  const Header = React.memo(function Header({title}){
    return <div>
      {title}
    </div>
  })

export default App
