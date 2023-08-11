import{useEffect, useState} from 'react';
import './App.scss';
import Item from './component/Item.js';

const initData = [
  //{todo:'리액트공부하기',state:false,date:Date.now()} -> obj 값
  // 일을 한 상태면 state값을 ture로 변경해주자! / date속성으로 고유값 설정해주자
] 

function App() {

  const [data,setData] = useState(initData); //setData를 이용해서 변경해야됨 data는 처음에 initData를 가지고 있음.
  const [count,setCount] = useState(0); 
  const [mode,setMode] = useState(true);
  const [mData,setmData] = useState(''); // setmdata로 mdata값 변경
  let [mCode,setCode] = useState();

  const modifyData = (code) => {
    setCode(code);
    setMode(false);
   let data2 = data.filter(obj => obj.date == code);
   setmData(data2[0].todo); 
  }
  
  const deleteData = (code)=>{
    let delData = data.filter(obj => obj.date !=code); //삭제할 데이터 빼고 아닌 데이터만 delData에 담아둔다
    setData(delData);
  }

  

  const todocount = () => {
    let dataCount = data.filter(obj => obj.state == false);
    setCount(dataCount.length);
  }

  const todoStatus = (e) =>{
    let stateCode = e.target.checked; //체크박스 클릭하면 ture / false값 출력
    let dateCode = e.target.dataset.code; //태그에 데이터 속성 넣고 가져오는 작업 dataset유사배열의 속성으로 데이터를 몽땅 갖고 있음
    let datafind = data.map((obj)=>{ //고유값 이용해 아이템을 찾자! 
      if(obj.date == dateCode){
        obj.state = stateCode; //obj의 값을 stateCode(true/false)값으로 찾아주기
      }
      return obj;
    });
    setData(datafind); //맵은 값을 리턴하게 되면 배열로 값을 빼냄 [{},{},{}...] 이런식으로 데이터 쌓이게 됨
  }
  


  const insert = (e) => { 
    e.preventDefault();
    let todo = e.target.todo.value //인풋의 값을 집어넣어주는 작업
    if(mode){
      setData([...data,{todo,state:false,date:Date.now()}]);} /// 데이터를 넣어주고, 신규 데이터를 집어넣는 작업 데이터 누적시키며 새 값을 넣는 것.
      else{ //수정하기 
        setData(data.map(obj=>{
          if(obj.date == mCode ){
            obj.todo = todo;
          }
            return obj;
      }))
      } 
      e.target.todo.value = ''; //setMdata('');
    }
  
  //sort 배열값 누가 더 큰지 작은지에 따라 데이터의 위치를 바꿈
  data.sort(function(b,a){ //오름차순 정렬 최신값이 위로 올라오게!
    if(a.date > b.date) return 1; //이놈들이 밑으로 내려갈수록커지는 내림차순 
    if(a.date < b.date) return -1;
    return 0;
  })


  useEffect(()=>{
    todocount();
  },[data]) //data를 집어넣을 때마다 useEffect안의 명령이 시행된다.
  

  return (
   <div className="App">
   <article>
    <h1>🔥Todo List🔥 <span>할 일 {count}개 남음</span></h1>
    <ul>

      {
        data.map((obj)=>(
         <Item 
         key = {obj.date} 
         item={obj} 
         todoStatus={todoStatus} 
         deleteData = {deleteData}
         modifyData = {modifyData}/>
        ))
      }
    
      <form onSubmit={insert}>
        
          {

            <p>
            <input name="todo" type="text" Value={mData} onChange={(e)=>{setmData(e.target.value)}}/>
            <button > {(mode)? '등록':'수정'}</button>
            </p>
          }
          
        
      </form>
    </ul>
   </article>
   </div>
  );
}

export default App;
