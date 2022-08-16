import React from "react";
import { useState, useEffect } from "react";

function Form({ todos, setTodos }) {
  const [form, setForm] = useState("");

  const onChangeInput = (e) => setForm(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form === " " || form === "") {
      return false;
    }
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        todo: form,
        checked: false,
      },
    ]);
  };

  useEffect(() => {
    setForm("");
  }, [todos]);
  return (
    <div>
      <header className="header">
        <h1>todos</h1>

        <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={form}
            autoFocus
            onChange={onChangeInput}
          />
        </form>
      </header>
    </div>
  );
}

export default Form;
