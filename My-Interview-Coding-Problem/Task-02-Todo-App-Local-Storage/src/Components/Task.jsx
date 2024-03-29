
import React from 'react';

const Task=({ task, onDelete, isCompleted, onToggleCompletion })=> {
    // for Style
  const taskStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    color:"#000000",
    backgroundColor: isCompleted ? '#3498db' : 'transparent',
  };

  return (
    <div style={taskStyle}>
      <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{task}</p>
      <div>
        <button onClick={onToggleCompletion}>{isCompleted ? 'Undo' : 'Complete'}</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
