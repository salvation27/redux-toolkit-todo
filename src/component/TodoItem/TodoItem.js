import React from 'react'
import './TodoItem.css'
import {useDispatch} from 'react-redux'
import {removeTaskHandel,handelChekBox} from '../../store/todoSlice'

const TodoItem = ({item,num}) => {

  const dispatch = useDispatch()

  const removeHandel = (id)=> {
    dispatch(removeTaskHandel(id))
  }

  const toggleChekbox = (id)=> {
    dispatch(handelChekBox({id}))
  }

  return (
    <li className='todo_item'>
        <div>{num}. </div>
        <input type="checkbox" checked={item.complited} onChange={()=>toggleChekbox(item.id)} />
        <div>{item.text}</div>
        <div className="del_task" onClick={()=> removeHandel(item.id)}>X</div>
    </li>
  )
}

export default TodoItem