//how to handle loading state in the server component
const Todos = async () => {
  //manually adding delay
  const slowRes = await fetch('https://procodrr.vercel.app/?sleep=2000')
  const data = await slowRes.json()
  console.log(data)
  
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const todos = await response.json();
  console.log(todos)
  return (
    <>
      <h1>Todos</h1>
      <div className="todos-container">
        {
          todos.map(({ id, title, completed }) => (
            <div className="todo-item" key={id}>
              <input type="checkbox" checked={completed} readOnly />
              <p>{title}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todos;