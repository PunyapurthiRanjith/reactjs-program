import React, { useState } from "react";
import { toDoListData } from "./jsFunctions";

const ToDoList = () => {
  const [toDo, setToDo] = useState(toDoListData());

  const addItemHandler = () => {
    const toDoLength = toDo.length;
    const addData = {
      id: toDoLength + 1,
      text: `Item ${toDoLength + 1}`,
    };
    setToDo([...toDo, addData]);
  };
  const removeItemHandler = (clickedId) => {
    const filteredData = toDo.filter((eachToDo) => eachToDo.id != clickedId);
    setToDo(filteredData);
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
    
  }
  return (
    <>
      <h1>todo list</h1>
      <div className="border text-center p-3" style={{width:"400px",margin:"150px"}}>
        <ol>
          {toDo.map((eachToDo) => {
            return (
              <React.Fragment key={eachToDo.id}>
                <div>
                  <li style={{ display: "inline" }}>{eachToDo.text}</li>
                  <button onClick={() => removeItemHandler(eachToDo.id)}>
                    remove
                  </button>
                  <button onClick={()=>updateItemHandler(eachToDo.id)}>update</button>
                </div>
              </React.Fragment>
            );
          })}
        </ol>
        <button onClick={addItemHandler}>Add Item</button>
      </div> 
    </>
  );
};
export default ToDoList;
