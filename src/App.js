import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {HashRouter,Routes,Route,Link} from 'react-router-dom'
import List from './component/List';
import Insert from './component/Insert';
import Context from './Context';

function App() {
  // axios.put('http://localhost:3030/history/1',
  // {
  //   "msg":"커피"
  // }) //기본 메소드 : get // post: 데이터 추가 //delete : 데이터 삭제 // put: 데이터 변경. 변경할 항목과 내용 
  

  
  return (
    <Context>
    <HashRouter>
      <header>
        <nav>
          <Link to ="/"> 홈 리스트 </Link>
          <Link to ="/insert"> 글쓰기</Link>
          <Link to ="/modify"> 글수정</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path = "/" element={<List/>}/>
          <Route path = "/insert" element = {<Insert/>}/>
          {/*<Route path="/modify" element ={<List/>}/>*/}
        </Routes>
      </main>
    </HashRouter>
    </Context>
  );
}

export default App;
