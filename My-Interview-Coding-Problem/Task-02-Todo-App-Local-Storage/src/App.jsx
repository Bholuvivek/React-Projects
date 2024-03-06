import React, { useState,useEffect } from 'react';
import './App.css';
import Task from './Components/Task'; 

const  App=() =>{
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { name: newTask, completed: false }]);
    
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
// For Loacal Storage

useEffect(() => {
  const tasks = JSON.parse(localStorage.getItem("tasks"))

  if (tasks && tasks.length > 0) {
    setTasks(tasks)
  }
}, [])

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])
  return (
  
    <div className="App"> 
      <div className="task-container"> <h2>Task 2: Todo App</h2>
        <div className="input-container">
          <input type="text" placeholder='Write Task..' value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
          
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="tasks-box">
    

           {tasks.map((task, index) => (
             <Task
               key={index}
               task={task.name}
               onDelete={() => deleteTask(index)}
               isCompleted={task.completed}
              onToggleCompletion={() => toggleTaskCompletion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
