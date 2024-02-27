import Todo from "./Todo";

const Todos = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Todos;
