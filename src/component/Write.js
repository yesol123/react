import React, { useContext } from 'react'
import { MyContect } from '../Context';

function Write() {
  const {dispatch} = useContext(MyContect);

  const insert = (e) => {
    e.preventDefault();

    let form = new FormData(e.target);
        form.append('id',Date.now()); //내가 추가 시키고 싶으면 append를 이용해서 추가시키고 싶은 것을 추가

    let d = Object.fromEntries(form); 
    console.log(d);
   
    
    dispatch({type:'insert',data:d}); //dispatch 요청 = d라는 데이터를 insert해달라고 요청
  }

  return (
    <>
    <article>
      <h2>Contect</h2>
      <form onSubmit={insert} id="contect">
        <input type='text'name='name' placeholder='이름'/>
        <input type='email'name='email' placeholder='이메일'/>
        <textarea name='content'></textarea>
        <input type='submit' value='저장하기'/>
      </form>
    </article>
    </>
  )
}

export default Write