import React from 'react'
import './Style.css'
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { CiSquareCheck } from "react-icons/ci"
const TaskList = ({ task, setTask, setaddtask, setUpdate,setEdit }) => {

    const handleRemove=(id)=>{
    const filteitem= task.filter((items)=>id != items.id)
    setTask(filteitem)
  };
  const handleEdit=(id)=>{
    const edititem = task.find((elem)=>{
      return id === elem.id
    })
    setaddtask(edititem.title)
    setUpdate(false)
    setEdit(id)
  };
  const handleComplete = (id)=>{

  }

  return (
    <>
  <div className="top">
  <ul>
  {
   task.map((taskList)=>(
        <div className='list-div'>
            <li key={taskList.id}>
              <span className='check'>
              <CiSquareCheck size={25} onClick={()=>handleComplete(taskList.id)}/></span>
              <span>{taskList.title}
              </span>
              <span className="delete" onClick={()=>handleRemove(taskList.id)}><MdDelete size={25}/></span>
              <span className='edit' onClick={()=>handleEdit(taskList.id)}><FaEdit size={25}/></span> 
              </li>
          
        </div>
      ))
      }
      </ul>
  </div>
    </>
  )
}

export default TaskList