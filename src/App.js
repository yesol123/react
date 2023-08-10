import{useState} from 'react';
import './App.scss';
import Item from './component/Item.js';

const initData = [
  //{todo:'리액트공부하기',state:false,date:Date.now()} -> obj 값
  // 일을 한 상태면 state값을 ture로 변경해주자! / date속성으로 고유값 설정해주자
] 

function App() {

  const [data,setData] = useState(initData); //setData를 이용해서 변경해야됨 data는 처음에 initData를 가지고 있음.

  let todoStatus = (e) =>{
    let stateCode = e.target.checked;
    let dateCode = e.target.dataset.code;
    let datafind = data.map((obj)=>{
      if(obj.date == dateCode){
        obj.state = stateCode;
      }
      return obj;
    });
    setData(datafind);
  }
  
  console.log(data);

  const insert = (e) => {
    e.preventDefault();
    let todo = e.target.todo.value
    setData([...data,{todo,state:false,date:Date.now()}]); /// 데이터 누적됨
  }

  //sort 배열값 누가 더 큰지 작은지에 따라 데이터의 위치를 바꿈
  data.sort(function(b,a){ //오름차순 정렬 최신값이 위로 올라오게!
    if(a.date > b.date) return 1; //이놈들이 밑으로 내려갈수록커지는 내림차순 
    if(a.date < b.date) return -1;
    return 0;
  })

  

  return (
   <div className="App">
   <article>
    <h1>🔥Todo List🔥 <span>할 일 6개 남음</span></h1>
    <ul>

      {
        data.map((obj)=>(
         <Item key = {obj.date} item={obj} todoStatus={todoStatus}/>
        ))
      }
    
      <form onSubmit={insert}>
        <p>
          <input name="todo" type="text"/>
          <button >등록</button>
        </p>
      </form>
    </ul>
   </article>
   </div>
  );
}

export default App;
