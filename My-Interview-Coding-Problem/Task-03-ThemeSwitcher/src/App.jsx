import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("#202020")
  return (
    <>
     <div className="bgColor-div"  style={{backgroundColor: color, height:'100vh'}}>
        <div className="btn">
          {
            color=='#202020'?<button  className='lite-btn' onClick={()=> setColor('#FFFFFF')} style={{backgroundColor:'#202020'}}  >Lite</button>:<button className='dark-btn' onClick={()=> setColor('#202020')} style={{backgroundColor:'#202020'}}  >dark</button>
          }
     </div>
     </div>
    </>
  )
}

export default App
