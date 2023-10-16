import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleCrateUser = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email= form.email.value;
    const user = {name, email}
    console.log(user);
    fetch('http://localhost:5000/users', {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        console.log(data)
        alert('Usre register successfully')
        form.reset();
      }
      
    })
  }

  return (
    <>
      
      <h1>Simple CRUD Client Side</h1>
      <form onSubmit={handleCrateUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
     
    </>
  )
}

export default App
