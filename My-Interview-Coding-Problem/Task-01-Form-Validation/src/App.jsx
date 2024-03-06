import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>
      <h2>Task 1 : Form</h2>
      <form action="">
        <div className="fields">
          <label htmlFor="name">Name</label>
          <input type="text"name='name' placeholder='Name.....'
          required
           />
        </div>
        <div className="fields">
          <label htmlFor="email">Email</label>
          <input type="email"name='email'  placeholder='Email.....'
          required
           />
        </div>
        <div className="fields">
          <label htmlFor="password">Password</label>
          <input type="password"name='password' placeholder='Password....' 
          required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default App
