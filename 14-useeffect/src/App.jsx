import { useEffect, useState } from "react"

const App = () => {

  // const [num1, setNum1] = useState(0)
  // const [num2, setNum2] = useState(100)
  // useEffect(()=>{console.log("yohoho")})  // here without dependency array it runs after every render 
  //useeffect(()=>{},[]) runs once only after first render

  // useEffect(()=>{console.log("yohoho")},[num2])// now num2 is dependency so when it changes its run 

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

function changeA(){
  console.log("A is changed")
}
function changeB(){
  console.log("B is changed")
}
  // useEffect(()=>{console.log("its running")},[a])

 useEffect(()=>{//  Here, useEffect runs whenever [a] changes, and then the function inside {} runs, right
  changeA()
 },[a])// b is also changing but we didnt add b in use effect

  return (
    <div>
      {/* <h1>Num1 {num1} </h1><h1>Num2 {num2} </h1>
      <button onMouseEnter={()=>{setNum1(num1+1)}}  onMouseLeave={()=>{setNum2(num2+10)}}>Click</button> */}
    
    <h1>A is {a}</h1>
    <h1>B is {b}</h1>
    
    <button onClick={()=>
      setA(a+1)
    }>Change A</button>

    <button onClick={()=>{
      setB(b+1)
    }}>Change B</button>
    </div>
  )
}

export default App