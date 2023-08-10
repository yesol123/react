import React from 'react'

function Item({item,todoStatus}) {

   
  return (
    <li className={item.state ? 'active':''}>
    <input type='checkbox' data-code={item.date} onChange={todoStatus}/>
    <code>{item.todo}</code>
    <button disabled = {item.state ? true:false}> 수정</button>
    <button>삭제</button>
  </li>
  )
}

export default Item