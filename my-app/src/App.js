import React from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";
/* Hooks are the new feature introduced in the React 16.8 version. 
It allows you to use state and other React features without writing a class. 
Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.  */
//We want a single state to start with called "todos", which will be an array. We can use a built in React hook for this, called useState().

function App() {
  /* const [todos, setTodos] = useState([]);
  array destructure syntax. We have an array with todos, but since state is immutable, we also need a function to set state.
  function addTodo(todo) {
    setTodos([todo, ...todos]); */
  //...spread operator, creates a new array, with the new todo in front and adding the old ones.
  //...array,...array concatenates 2 arrays.

  /* we need to change the state cause we add a new todo,so we use setTodos (aka setState) and add the new todo at the start of the array,
  while printing the other todos afterwards with the spread operator. */

  return (
    <div className="App">
      <Header title="My Todo App" />
      <TodoForm />
      <hr />
      <TodoList />
      <Footer />
    </div>

    //if I want to return multiple things need a div
  );
}
//html tags in components
export default App;

//Properties in React are parameters that 'live' on JSX elements. They're kinda like HTML attributes.
