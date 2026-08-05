import React from 'react'

const App = () => {
  // function btnClick(){
  //   console.log("You Clicked Me")
  // }

  // function inputChange(val){
  //   console.log(val)
  // }
  return (
    <div>
      {/* <button onDoubleClick={btnClick}>Do Not Click Me</button> */}
{/* // Inline arrow function ka naam nahi hota. */}
      {/* <button onClick={()=>{console.log("Yo Do Not Have To Click me")}}>Now You Can Click Me</button> */}

      {/* <button onClick={function clicked(){console.log("clicked")}}>Now You Can Click Me</button> */}
    
  {/* <input onChange={function(elem){
        // console.log(elem.nativeEvent.data)
        // target khud input element hai. Isliye tum uski properties access kar sakte ho: e.target.value e.target.id
        console.dir(elem.target.value)}} type='text' placeholder='Type here'></input> */}
     
     {/* <input onChange={(smthng)=>{inputChange(smthng.target.value)}} type='text' placeholder='Type here'></input> */}
    
    <div onMouseMove={(elem)=>{
      console.log(elem.clientY,elem.clientX)
    }} className="box"></div>
    
    {/* <div onWheel={(elem)=>{
      if (elem.deltaY > 0) {
          console.log("Scroll Down");
      } else {
          console.log("Scroll Up");
      }}}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div> */}

    </div>
  )
}

export default App