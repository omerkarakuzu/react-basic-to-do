import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";
import Footer from "./Components/Footer";

function App() {
  const [todos, setTodos] = useState([]);

  const [hide, setHide] = useState("All");
  return (
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} /> {""}
      <List todos={todos} setTodos={setTodos} hide={hide} />
      <Footer todos={todos} setTodos={setTodos} setHide={setHide} />
    </div>
  );
}

export default App;
