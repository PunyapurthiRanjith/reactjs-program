import React, { useState } from "react";
import { toDoListData } from "../hooks/jsFunctions";

const CustomLocalStorageHook = () => {
  const [toDo, setToDo] = useState(toDoListData());
  localStorage.setItem("data",JSON.stringify(toDo))

  const addItemHandler = () => {
    const toDoLength = toDo.length;
    const addData = {
      id: toDoLength + 1,
      text: `Item ${toDoLength + 1}`,
    };
    setToDo([...toDo, addData]);
    localStorage.setItem("data",JSON.stringify(toDo))
  };
  const removeItemHandler = (clickedId) => {
    const filteredData = toDo.filter((eachToDo) => eachToDo.id != clickedId);
    setToDo(filteredData);
    localStorage.setItem("data",JSON.stringify(toDo))
  };
  const updateItemHandler=(updateDataId)=>{
    const updateTodo = toDo.map(each => {
        if(each.id==updateDataId){
          const updateValue={...each,text:"Hi I'm Updated"}
          return updateValue
        }
        return each
      }
    )
    setToDo(updateTodo)
    localStorage.setItem("data",JSON.stringify(toDo))    
  }
  return [toDo,addItemHandler,removeItemHandler,updateItemHandler]
};
export default CustomLocalStorageHook;
