const todos = [
  { task: "mow the yard", id: 1 },
  { task: "Work on Odin Projects", id: 2 },
  { task: "feed the cat", id: 3 },
];

export default function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        // here we are using the already generated id as the key.
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}