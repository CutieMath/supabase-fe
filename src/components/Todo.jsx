const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <h3>
        {todo.text}
        <button
          className="btn"
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          x
        </button>
      </h3>
    </div>
  );
};

export default Todo;
