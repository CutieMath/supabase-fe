const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
};

export default Todos;
