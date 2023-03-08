//import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";

export default function AddTasks(onAddTask){
    [text, setText] = useState("");
  return(
    <>
     <input 
     placeholder = "add tasks"
     value = {text}
     onChange={(e) => setText(e.target.value)}
     />
     <button onClick={
      ()=>{
      setText('')
      onAddTask(text);
    }}
    >Add</button>
    </>
  );
}