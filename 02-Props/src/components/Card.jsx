const Card = (props) => {
    console.log(props.user)    
  return (
    <div className='card'>
        <img src={props.img}></img>
        <h1>{props.user} The Hunter,Age of {props.age}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis amet, aut, aliquam iusto beatae quos mollitia natus accusamus adipisci in soluta rerum nemo esse commodi impedit saepe molestias dolorem repellat?</p>
        <button>Click me</button>
    </div>
  )
}

export default Card