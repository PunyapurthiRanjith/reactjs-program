import React from "react";
import CustomCounterHook from "../components/customHooks/counterHook";
import CustomLocalStorageHook from "../components/customHooks/localStorage";
import { toDoListData } from "../components/hooks/jsFunctions";
import CustomUseRefHook from "../components/customHooks/CustomHookUseRef";
import CustomInternetHook from "../components/customHooks/internetHook";

const Header = () => {
  const [countValue, increment, decrement] = CustomCounterHook();

  const [toDo, add, remove, update] = CustomLocalStorageHook(toDoListData());

  const [age, previousAge, incrementAge, decrementAge] = CustomUseRefHook();
  
  const [online] = CustomInternetHook();

  return (
    <>
      <h1>Hii</h1>
      <h2>Welcome to React</h2>


      {
      online ? (
        <>
          <h1 style={{ color: "blue" }}>you are online</h1>

          <span>counter value : {countValue}</span>
          <br />
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>

          <div
            className="border text-center p-3"
            style={{ width: "400px", margin: "150px" }}
          >
            <ol>
              {toDo.map((eachToDo) => {
                return (
                  <React.Fragment key={eachToDo.id}>
                    <div>
                      <li style={{ display: "inline" }}>{eachToDo.text}</li>
                      <button onClick={() => remove(eachToDo.id)}>
                        remove
                      </button>
                      <button onClick={() => update(eachToDo.id)}>
                        update
                      </button>
                    </div>
                  </React.Fragment>
                );
              })}
            </ol>
            <button onClick={add}>Add Item</button>
          </div>

          <span>current age: {age}</span>
          <br />
          <span>previous age: {previousAge}</span>
          <br />
          <button onClick={incrementAge}>Increment age</button>
          <button onClick={decrementAge}>Decrement age</button>
        </>
      ) : (
        <h1 style={{ color: "red" }}>you are offline</h1>
      )}
    </>
  );
};

export default Header;
