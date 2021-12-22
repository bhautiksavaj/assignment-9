import React, { useContext } from "react";
import { taskContext } from "../Context";

const Header = () => {
  const context = useContext(taskContext);
  return (
    <header className="header">
      <h1>Task tracker</h1>

      <button
        onClick={context.toggleShowAddTask}
        style={{ backgroundColor: context.showAdd ? "red" : "green" }}
        className="btn"
      >
        {context.showAdd ? "Close" : "Add"}
      </button>
    </header>
  );
};

export default Header;
