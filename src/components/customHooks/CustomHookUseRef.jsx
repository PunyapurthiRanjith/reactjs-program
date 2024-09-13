import React, { useState, useRef, useEffect } from "react";

const CustomUseRefHook = () => {
  const [age, setAge] = useState(20);  
  const prevAgeRef = useRef(null);      

  useEffect(() => {
    prevAgeRef.current = age;         
  }, [age]);                           

  const incrementAge = () => {
    setAge(age + 1);        
  };

  const decrementAge = () => {
    setAge(age - 1);        
  };

  const previousAge = prevAgeRef.current; 

  return [age,previousAge,incrementAge,decrementAge]
    
};

export default CustomUseRefHook;
