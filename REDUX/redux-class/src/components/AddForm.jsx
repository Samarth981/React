import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export default function AddForm() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const submitHandeler = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task)); //addTodo check task : action.payload() -> task as pass argument
    setTask('');
  };

  return (
    <>
      <form onSubmit={submitHandeler}>
        <input type="text" onChange={(e) => setTask(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
