import React from "react";

function Header(props) {
  return (
    <header>
      <h1 className="titleHeader">{props.title}</h1>{" "}
      {/* old : <h1>Todo App</h1> with no parameter*/}
    </header>
  );
}

export default Header;

//props are properties of a component!!!
