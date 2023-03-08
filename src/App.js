import {useState} from 'react';
import AddTasks from './AddTasks';

export default function ToDoList(){
  [tasks, setTasks] = useState(initialTasks);
  
  function handleAddTasks(text){
    return(setTasks([
      {
        ...tasks,
      id:taskId++,
      text:{text},
      done: true
      }]
      )
   )
  }


  function handleChangeTasks(){

    return(
      setTasks()
    )

  }

  function handleDeleteTasks(){
    return(
      setTasks()
    )
  }

  return(
    <>
     <h1>ToDoList</h1>
     <AddTasks onAddTask={handleAddTasks}
    </>
  )

}



let taskId = 3;
const initialTasks = [
  {id:0, text:"hello world", done: false},
  {id:1, text:"hello moon", done: false},
  {id:2, text:"hello sun", done: false},
]