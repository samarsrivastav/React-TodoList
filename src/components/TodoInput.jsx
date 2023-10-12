import { useState,React } from 'react'
function TodoInput(props) {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('');
  return (
    <>
      <input placeholder='TASK' onChange={e=>setTask(e.target.value)} value={task}/>
      <input placeholder='DATE AND TIME' onChange={e=>setTime(e.target.value)} value={time}/>
      <button onClick={()=>{
        props.addlist([
            "task: ",task,"   ",
            "time: ",time
        ])
        setTask("");
        setTime("");
      }}>ADD ITEM</button>
    </>
  )
}

export default TodoInput
