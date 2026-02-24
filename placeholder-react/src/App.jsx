import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'

function App() {
  const [users, setUser] = useState([])

  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);
  

  return (
    <>
      <div className="container">
      
        <User users={users}></User>

      </div>

    </>
  )
}

export default App
