import React,{ useContext, useRef } from 'react'
import {useNavigate} from 'react-router-dom';
import { MyContext } from '../Context';

function Insert() {
  
    const elForm = useRef();
    const navigate = useNavigate();   
    const {fetchFn} = useContext (MyContext);


    
    

    const inserFn = (t,e) =>{
        e.preventDefault();
        let formdata = new FormData(elForm.current);
        let today = new Date();
        let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
                    formdata.append('date',date) // 날짜 추가 '이름'과 값 
                    

        let ObjForm = Object.fromEntries(formdata); //formdata 안에 있는 값들이 객체 형태로 빠져나옴  fromEntries 이중배열생성  
        fetchFn('post',ObjForm);
        navigate('/');
    }



  return (
    <article>
        <h2>Insert</h2>
        <form ref={elForm}>
            <input type='text' name='price'/>
            <textarea name ='msg'></textarea>
            <button onClick={(e)=>{inserFn('p',e)}}>예금하기</button>
            <button onClick={(e)=>{inserFn('m',e)}}>출금하기</button>
        </form>
    </article>
  )
}

export default Insert