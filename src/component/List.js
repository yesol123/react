import React from 'react'

function List() {
  return (
    <article>
        <h2>List</h2>
        <p className='total'>총 잔액 : <code>3500</code></p>
        <ul>
            <li>
                <code>8/21</code>
                <code>카오위</code>
                <code>3500</code>
            </li>
        </ul>
    </article>
  )
}

export default List