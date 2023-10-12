import { useState,React } from 'react'
function TodoList(props) {
  return (
    <>
    <li>
       {props.item}&nbsp;&nbsp;
        <span onClick={()=>{
            props.dellist(props.index);
        }}>x</span>
    </li>
    </>
  )
}

export default TodoList
