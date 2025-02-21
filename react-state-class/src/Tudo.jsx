import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Tudo.css';

export default function Tudo() {
  //store in arr
  //   let [todo, setTodo] = useState(['sample test']);

  let [todo, setTodo] = useState([
    { task: 'sample test', id: uuidv4(), isDone: false },
  ]); //arr of object

  let [valueUpdate, setValueUpdate] = useState(''); //this is update input value

  let addNewTask = () => {
    setTodo((cuuTudo) => {
      return [...cuuTudo, { task: valueUpdate, id: uuidv4(), isDone: false }];
    }); //update value store and state change

    setValueUpdate(''); //after store value remove input filde
  };

  let updateValue = (event) => {
    setValueUpdate(event.target.value);
  };

  let deleteTudo = (id) => {
    setTodo((cuurTudo) => todo.filter((cuurTudo) => cuurTudo.id != id));
  };

  //update all element of arraay
  let upperCaseAll = () => {
    // return new copy with uppercase tasks
    setTodo((currtodo) =>
      currtodo.map((value) => {
        return {
          ...value,
          task: value.task.toUpperCase(),
        };
      }),
    );
  };

  //update one element of arraay
  let upperCaseOne = (id) => {
    setTodo((currtodo) =>
      currtodo.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            task: value.task.toUpperCase(),
          };
        } else {
          return value;
        }
      }),
    );
  };

  let IsCompliteOne = (id) => {
    setTodo((currtodo) =>
      currtodo.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isDone: true,
          };
        } else {
          return value;
        }
      }),
    );
  };

  let isDoneAll = () => {
    // return new copy with uppercase tasks
    setTodo((currtodo) =>
      currtodo.map((value) => {
        return {
          ...value,
          isDone: true,
        };
      }),
    );
  };

  return (
    <div>
      <input
        placeholder="add tast"
        value={valueUpdate}
        onChange={updateValue}
      ></input>
      <br />
      <br />
      <button onClick={addNewTask}>ADD</button>
      <br />
      <br />
      <hr></hr>
      <h4>List</h4>
      <ul>
        {todo.map((value) => {
          return (
            <li key={value.id}>
              <span
                style={value.isDone ? { textDecoration: 'line-through' } : {}}
              >
                {value.task}
              </span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTudo(value.id)}>Delete</button>
              &nbsp;
              <button onClick={() => upperCaseOne(value.id)}>uppercase</button>
              &nbsp;
              <button onClick={() => IsCompliteOne(value.id)}>
                IsComplite
              </button>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>UperCase all</button>
      <br />
      <br />
      <button onClick={isDoneAll}>Done task</button>
    </div>
  );
}
