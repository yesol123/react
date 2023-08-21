import React,{ useRef } from 'react'

function Insert() {
    const elForm = useRef();
    const inserFn = (e) =>{
        e.preventDefault();
        let formdata = new FormData(elForm.current);
        let today = new Date();
        let date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
                    formdata.append('date',date) // 날짜 추가 '이름'과 값 
        let ObjForm = Object.fromEntries(formdata); //formdata 안에 있는 값들이 객체 형태로 빠져나옴  fromEntries 이중배열생성  
        console.log(ObjForm);
    }
  return (
    <article>
        <h2>Insert</h2>
        <form ref={elForm}>
            <input type='text' name='price'/>
            <textarea name ='msg'></textarea>
            <button onClick={inserFn}>예금하기</button>
            <button>출금하기</button>
        </form>
    </article>
  )
}

export default Insert