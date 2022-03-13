import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import { useSelector } from 'react-redux'

const Todo = ({handelChekBox}) => {
  const todos = useSelector(state=>state.todos.todos)
  return (
    <ul>
        {todos.map((item, i) => (
        <TodoItem
            num={i + 1}
            handelChekBox={handelChekBox}
            key={item.id}
            item={item}
        />
        ))}
  </ul>
  )
}

export default Todo