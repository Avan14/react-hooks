import { useState ,useMemo,useEffect} from 'react'


function App() {
  const [counter, setCount] = useState(0);
  const [ val,setval] = useState(0);

  let count= useMemo(()=>{
    let count = (val*(val+1))/2;
    return count;
   },[val])
  return (
    <>
     <input type="text" onChange={function(e){ setval(e.target.value)}} plceholder ="enter a number" />
      <br></br>
      {val} is {counter}
      <br />
      <button></button>
    </>
  )
}

export default App
