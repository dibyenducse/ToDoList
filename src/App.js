import {useState} from 'react';
import AddTasks from './AddTasks';
import TasksList from './tasksList';
import React from 'react';

export default function ToDoList(){
  [tasks, setTasks] = useState(initialTasks);
  
  function handleAddTask(text){
    setTasks([
      {
        ...tasks,
        {
      id:taskId++,
      text:{text},
      done: true
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
        } )
      )
  }

  function handleDeleteTask(taskId){
      setTasks(tasks.filter((t) =>{
         t.id !== taskId
      }))
  }

  return(
    <div>
     <h1>ToDoList</h1>
     <AddTasks onAddTask={handleAddTask} />
     <TasksList onChangeTask={handleChangeTask} OnDeleteTask = {handleDeleteTask} />
    </div>
  )

}



let taskId = 3;
const initialTasks = [
  {id:0, text:"hello world", done: false},
  {id:1, text:"hello moon", done: false},
  {id:2, text:"hello sun", done: false},
]