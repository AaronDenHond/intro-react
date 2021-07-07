import React, { useState } from "react";
// importing useState as a dependency to be able to manage state (like active/inactive and more complex states)
function TodoList() {
  const initialTodos = [
    "Open the door",
    "Get on the floor",
    "Everybody walk the dinosaur",
    "And walk it again",
  ];
  const [todos, setTodos] = useState(initialTodos);
  //useState returns 2 values in an array : [currentState, function to setState].
  //useState param accepts the state when we first load the app (in this case our initial array of todos)
  //Every time a state is updated (in our case it would be by using the setTodos function) React updates the connected UI elements 🥳
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" /> {todo}
        </li>
      ))}
    </ul>
    /* with the .map method, we loop over every element in an array and do something with it. Here, we say : for every element
    in the array, put it in the ul as a listitem, with a checkbox  */
    //if not a static list, need function to make uniqueID. Every todo item should be an object with a uniqueID!
  );
}

export default TodoList;
