import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Todos from "./components/Todos";
import { supabase } from "./supabaseClient";

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

  const deleteFromSupabase = async (id) => {
    const response = await supabase.from("todos").delete().eq("id", id);
    if (response.status === 200 || response.status === 204) {
      console.log("Deleted from the backend");
      alert("Deleted from the backend");
    }
    if (response.error) {
      console.log("Error deleting from the backend");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // delete from the backend
    deleteFromSupabase(id);
  };

  return (
    <div className="container">
      <Header />
      <Todos todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
