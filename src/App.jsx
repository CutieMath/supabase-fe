import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Todos from "./components/Todos";
import { supabase } from "./supabaseClient";

function App() {
  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "yuxin_ye@protonmail.com",
      password: "banana",
    });
    if (error) {
      console.error("Error during sign in:", error);
      return;
    }
  };

  useEffect(() => {
    const fetchTodosFromSupabase = async () => {
      await signIn();
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching data from the backend:", error);
      } else {
        console.log("Data fetched from the backend:", data);
        setTodos(data);
      }
    };
    fetchTodosFromSupabase();
  }, []);

  const [todos, setTodos] = useState([]);

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
