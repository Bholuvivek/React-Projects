import React, { useState } from 'react'
import './Style.css'
import TaskList from './TaskList'
import { v4 as uuidv4, validate } from 'uuid';
const TodoList = () => {
    // Taking to do
    const [addtask, setaddtask] = useState("")
    
    const [task, setTask] = useState([])
    // Update TO DO

    const [update, setUpdate] = useState(true)
    const [edit, setEdit] = useState(null)

    const handleUpdate = ()=>{
      if(addtask===""){
        alert('Please add Task')
      }
     else if(!update){
        setTask(task.map((newelement)=>{
          if(newelement.id===edit){
            return {...newelement, title:addtask}
          }
          return newelement;
        }))
        setUpdate(true)
        setaddtask('')
        setEdit(null)
      }
      else{
        const allActivity = {id:uuidv4(), title:addtask}
        setTask([...task, allActivity])
        setaddtask("")
      }
    }

    const removeAll =()=>{
      alert('Are you Sure!')
      setTask([])
    }
  return (
    <>
    <div className="main">
        <div className="top"> 
        <input type="text"
        value={addtask}
        onChange={(e)=>setaddtask(e.target.value)}
        
         />
        </div>
        <div className="btm">
          {
            update ?<button className="add-btn"
            onClick={handleUpdate}
            >Add Task</button>:<button className="add-btn"
            onClick={handleUpdate}
            >Update Task</button>
          } 
          <TaskList task={task} setTask = {setTask} 
          setaddtask={setaddtask} setUpdate={setUpdate}
          setEdit={setEdit}
          />
        </div>
        {
          task.length>0?<div className="btm-re" ><button className='remove-btn' onClick={removeAll}>Remove All Task</button></div>:""
        } 
    
    </div>
    
    </>
  )
}

export default TodoList