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
  const btnStyle={
    background:"blue",
    border: "1px solid black",
    borderRadius: "5px",
    color:"white"
  }
  return (
    <>
      <div className="border text-center p-3" style={{width:"500px",margin:"150px"}}>
        <div>
          <h2>TODO List</h2>
          <button style={btnStyle} onClick={addItemHandler}>Add Todo Item</button>
          {toDo.map((eachToDo) => {
            return (
              <React.Fragment key={eachToDo.id}>
                <div style={{margin:"10px", width:"450px"}} className="d-flex justify-content-around">
                  <h3 style={{ display: "inline" }}>{eachToDo.text}</h3>
                  <button style={btnStyle} onClick={()=>updateItemHandler(eachToDo.id)}>Update Todo</button>
                  <button style={{background:"red", borderRadius:"5px"}} onClick={() => removeItemHandler(eachToDo.id)}>
                    Remove Todo
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div> 
    </>
  );
};
export default ToDoList;
