import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "todo 1",
    },
    {
      id: 2,
      text: "todo 2",
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
