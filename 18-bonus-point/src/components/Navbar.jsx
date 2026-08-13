import React from 'react'

const Navbar = (props) => {
    const btnClcik=()=>{
        console.log(props.theme)
        props.setTheme('dark')
    }
  return (
    <div>
        <button onClick={btnClcik}>Change theme</button>
    </div>
  )
}

export default Navbar