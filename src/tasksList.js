import { useState } from "react";

export default function TasksList({tasks, onChangeTask, onDeleteTask})
{
    return (
        <ul>
            {tasks.map((task) => (
                <li key ={task.id} >
                     <Task task={task}
                     onChange={onChangeTask} 
                     onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

function Task({task, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
  
    let taskRow;
  
    if (isEditing) {
      taskRow = (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      );
    } else {
      taskRow = (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      );
    }
  
    return (
      <>
        {taskRow}
        {onDelete && (
          <button onClick={() => onDelete(task.id)}>
            Delete
          </button>
        )}
      </>
    );
  }

