import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTaskHandel(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.input,
        complited: false,
      });
    },
    removeTaskHandel(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload)
    },
    handelChekBox(state, action) {
      const toggledTodo =  state.todos.find(todo=>todo.id === action.payload.id)
      toggledTodo.complited = !toggledTodo.complited
    },
    // тоже работает
    
    // handelChekBox(state, action) {
    //   state.todos =  state.todos.map(todo=>{
    //     if(todo.id !==action.payload) return todo 
    //     return {
    //       ...todo,
    //       complited: !todo.complited,
    //     }
    //   })
    // },

   
    
  },
});

export const {addTaskHandel,removeTaskHandel,handelChekBox} = todoSlice.actions

export default todoSlice.reducer

