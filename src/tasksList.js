import { useState } from "react";

export default function TasksList({tasks, onChangeTask, onDeleteTask})
{
    return (
        <ul className="my-list">
            {tasks.map((task) => (
                <li className="list-item" key ={task.id} >
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
            className="edit-input"
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button className="btn-save" onClick={() => setIsEditing(false)}>Save</button>
        </>
      );
    } else {
      taskRow = (
        <>
          {task.text}
          <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
        </>
      );
    }
  
    return (
      <>
        {taskRow}
        {onDelete && (
          <button className="btn-dlt" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        )}
      </>
    );
  }

