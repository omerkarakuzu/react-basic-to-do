import React from "react";

function List({ todos, setTodos, hide }) {
  const checkTodo = (e) => {
    let newTodos = todos.map((item) => {
      console.log("Item id: ", item.id);
      console.log("Target Id: ", e.target.id);
      if (parseInt(item.id) === parseInt(e.target.id)) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (e) => {
    setTodos(
      todos.filter((item) => parseInt(item.id) !== parseInt(e.target.id))
    );
  };
  const isCompleted = (e) => {
    if (e.checked === true && hide === "All") return "completed";
    else if (e.checked === true && hide === "Active") return "completed hidden";
    else if (e.checked === false && hide === "Completed") return "hidden";
  };
  return (
    <div className="main">
      <ul className="todo-list">
        {todos.map((item) => (
          <li key={item.id} id={item.id} className={isCompleted(item)}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={item.checked}
                id={item.id}
                onClick={checkTodo}
              />
              <label>{item.todo}</label>
              <button
                className="destroy"
                id={item.id}
                onClick={deleteTodo}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
