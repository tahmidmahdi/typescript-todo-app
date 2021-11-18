import React, {useState} from 'react';
import TodoList from '../TodoList/TodoList';
import './Home.css';
interface Todo {
  todo: string;
  date: string;
}
const Home = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo>({
    todo: '',
    date: '',
  });
  const [allTodo, setAllTodo] = useState<Todo[]>([]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(typeof e.target.value);
    setTodos({todo: e.target.value, date: new Date().toDateString()});
    // console.log(todos);
  };
  const handleClick = () => {
    setAllTodo([...allTodo, todos]);
    console.log(allTodo);
    setTodos({todo: '', date: ''});
  };
  return (
    <div className="container mt-5">
      <input
        value={todos.todo}
        className="form-control form-control-lg "
        type="text"
        placeholder="Add ToDos"
        aria-label=".form-control-lg example"
        onChange={(value) => onChange(value)}
      ></input>
      <button
        className="btn btn-primary btn-lg mt-3 px-5 mb-5"
        onClick={handleClick}
      >
        Add New ToDo
      </button>
      <div className="mb-4">
        <h3>List of ToDos</h3>
      </div>
      {allTodo.map((todo) => (
        <TodoList name={todo.todo} date={todo.date} key={todo.todo}></TodoList>
      ))}
    </div>
  );
};

export default Home;
