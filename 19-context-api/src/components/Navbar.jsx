import Nav2 from './Nav2'

export const Navbar = ({children,theme}) => {
    // console.log(props.theme)
    // console.log(props.children)
    console.log(children[0])
  return (
    
    <div className='nav'>
        <h1>Pickario</h1>
        <Nav2 theme={theme}></Nav2>
    </div>
  )
}
