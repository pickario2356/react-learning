

const App = () => {
  // localStorage.setItem('user','me')
  // const user = localStorage.getItem('user')// only store string
  // console.log(user)

  // localStorage.setItem('age','Dont Know')
  // const age = localStorage.getItem('age')
  // console.log(age)

// localStorage.clear()
const intro = {
  name: "Rahul",
  age: 17
};
localStorage.setItem('intro', JSON.stringify(intro))// JSON.stringify(intro) // Object ko string mein convert karta hai:
const data = JSON.parse(localStorage.getItem('intro'))
console.log(data)// PARSE FOR STRING TO OBJ
  return (
    <div>App</div>
  )
}

export default App