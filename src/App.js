// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Todo from "./component/Todo/Todo";
import Input from './component/Input/Input'
import { useDispatch } from "react-redux";
import {addTaskHandel} from './store/todoSlice'

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()

  const addTask  = () => {
    dispatch(addTaskHandel({input}))
    setInput('')
  }

// перенесли в редакс 

  // const addTaskHandel = () => {
  //   if (input.trim().length) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: new Date().toISOString(),
  //         text: input,
  //         complited: false,
  //       },
  //     ]);
  //     setInput("");
  //   }
  // };

  // const handelChekBox = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== id) return todo;
  //       return {
  //         ...todo,
  //         complited: !todo.complited,
  //       };
  //     })
  //   );
  // };

 
  return (
    <div className="App">
      <div className="container">
      <Input input={input} setInput={setInput} addTaskHandel={addTask}  />
        <hr />
        <Todo/>
      </div>
    </div>
  );
}

export default App;
