import {useState} from 'react';

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

}



let taskId = 3;
const initialTasks = [
  {id:0, text:"hello world", done: false},
  {id:1, text:"hello moon", done: false},
  {id:2, text:"hello sun", done: false},
]