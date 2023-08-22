import React, { useContext,useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';

function Modify() {
  const elForm = useRef();
  const location = useLocation();
  const {price,msg,date,id} = location.state.obj;

  const navigate = useNavigate();   
  const {fetchFn} = useContext (MyContext);


  const inserFn = (t,e) =>{
      e.preventDefault();
      let formdata = new FormData(elForm.current);
      let today = new Date();
      let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
                  formdata.append('date',date) // 날짜 추가 '이름'과 값 
                  formdata.append('id',id) //id추가 
      let ObjForm = Object.fromEntries(formdata); //formdata 안에 있는 값들이 객체 형태로 빠져나옴  fromEntries 이중배열생성  
      fetchFn('put',ObjForm);
      navigate('/');
  }



  return (
    <>
    <article>
        <h2>Modify</h2>
        <form ref={elForm}>
            <input type='text' name="price" defaultValue={price}/>
            <textarea name="msg" defaultValue={msg}></textarea>
            <button onClick={(e)=>{inserFn('p',e)}}>예금하기</button>
            <button onClick={(e)=>{inserFn('m',e)}}>출금하기</button>
        </form>
    </article>
    </>
  )
}

export default Modify