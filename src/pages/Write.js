import React,{useContext} from 'react'
import { DataContext } from '../Checkname'

function Write() {
  const {data,setData} = useContext(DataContext);

  let insert = (e)=>{
    e.preventDefault();
    let v = e.target;
    if(v.name.value == ''){
      alert('이름을 입력해 주세요!')
    }else{
      let n ={
        name:v.name.value,
        id:Date.now()
      }
      setData([...data,n]);
    }
    e.target.name.value = '';
  }


  

  return (
    <article>
      <h2>참여자 등록</h2>
      <form onSubmit={insert}>
        <input type='text' name='name' placeholder='이름?'/>
        <input type = "submit" value='저장하기'/>
      </form>
    </article>
  )
}

export default Write