import {useState} from 'react';
import AddTask from './AddTasks';
import TasksList from './tasksList';
import React from 'react';

export default function ToDoList(){
 const [tasks, setTasks] = useState(initialTasks);
  
  function handleAddTask(text){
    setTasks([
        ...tasks,
        {
      id:taskId++,
      text:text,
      }
    ]);
  }

  function handleChangeTask(task){
      setTasks(
        tasks.map((t) =>{
          if(t.id == task.id){
            return task;
          } else{
            return t;
          }
        })
      )
  }

  function handleDeleteTask(taskId){
      setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return(
    <div>
     <h1>ToDoList</h1>
     <AddTask onAddTask={handleAddTask} />
     <TasksList 
     tasks={tasks} 
     onChangeTask={handleChangeTask} 
     onDeleteTask={handleDeleteTask} />
    </div>
  )

}



let taskId = 3;
const initialTasks = [
  {id:0, text:"hello world"},
  {id:1, text:"hello moon" },
  {id:2, text:"hello sun"},
]