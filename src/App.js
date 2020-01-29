import React, { useState } from 'react';
import ToDoForm from './components/ToDoList';



export default () => {
  const [todos, setTodos] = useState([]);
  const removeTodo = i => {
    setTodos(
      todos.map(
        (todo, k) =>
          k === i 
            ? {
              ...todo,
              complete: !todo.complete
            }
          : todo
        )
    )
  };

  return (
   <div className="td-panel">
     <h1 className="td-panel__title">My very simple react ToDo List</h1>
     <h3 className="td-panel__subtitle">Tasks to do: (<span className="td-panel__counter">{todos.filter(todo => !todo.complete).length}</span>)</h3>
     <ToDoForm onSubmit={text => setTodos([{text, complete: false}, ...todos])} />
     <ul className="td-panel__list">
       {
        todos.map((td, i) => !td.complete ? <li className="td-panel__list-item" key={`${td.text}${Date.now()}`}>{td.text}<button className="td-panel__button" onClick={() => removeTodo(i)}></button></li> : "")
       }
     </ul>
      {
      todos.filter(td => td.complete).length > 0 ? <h3 className="td-panel__list-complete-title">Completed tasks</h3> : ""
      }
     <ul className="td-panel__list-complete">
      {
        todos.map((td, i) => td.complete ? <li className="td-panel__list-complete-item" key={`${td.text}${Date.now()}`}><button disabled className="td-panel__list-complete-item-tick"></button>{td.text}</li> : "")
      }
     </ul>
   </div>
  );
}
