import React from 'react';
interface Todo {
  name: string;
  date: string;
}
const TodoList = ({name, date}: Todo): JSX.Element => {
  return (
    <div>
      <div className="card text-center mb-4">
        <div className="card-header">Todo Name</div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <button className="btn btn-primary">Delete</button>
        </div>
        <div className="card-footer text-muted">{date}</div>
      </div>
    </div>
  );
};

export default TodoList;
