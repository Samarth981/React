import { useSelector, useDispatch } from 'react-redux';
import AddForm from './AddForm.jsx';
import { deleteTodo, markIsDone } from '../features/todo/todoSlice';

export default function Todo() {
  const todos = useSelector((state) => state.todo?.todos || []); // Prevent undefined errors
  console.log(todos);

  const dispatch = useDispatch();

  const clickHandeler = (id) => {
    dispatch(deleteTodo(id));
  };

  const MarkAsDone = (id) => {
    dispatch(markIsDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => {
          const styles = {
            textDecoration: todo.isDone ? 'line-through' : 'none',
          };

          return (
            <li key={todo.id} style={styles}>
              {todo.task}
              <button onClick={() => clickHandeler(todo.id)}>Delete</button>
              <button onClick={() => MarkAsDone(todo.id)}>Mark now</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
