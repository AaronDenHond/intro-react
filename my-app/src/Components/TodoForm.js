import React from "react";

function TodoForm() {
  return (
    <form className="form">
      <input type="text" placeholder="Write your todo here!" />
      <input type="submit" value="add Todo" />
    </form>
    //the form structure for our todolist.
  );
}

export default TodoForm;
