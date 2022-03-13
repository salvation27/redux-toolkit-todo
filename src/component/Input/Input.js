import React from 'react'

const Input = ({input,setInput,addTaskHandel}) => {
  return (
    <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTaskHandel}>Add task</button>
    </div>
  )
}

export default Input