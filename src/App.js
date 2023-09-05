
import './App.scss';
import{Link,BrowserRouter,Route,Routes,useParams} from 'react-router-dom';
import List from './component/List';
import Movies from './component/Movies';
import Tvs from './component/Tvs';
import axios from 'axios';




// const themoviedb = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
//   params: { api_key: 'f89a6c1f22aca3858a4ae7aef10de967' }
// })

//필요한 리소스들을 정의 해주기
//let cStr_1 = ['movie','tv];
//let cStr_2 = ['upcoming','popular','top_rated'];
//let img_origin = 'https://image.tmdb.org/t/p/original/';
//let img_poster = 'https://image.tmdb.org/t/p/w500/';

// 변수를 객체형태로 하나로 만들어서 써줘도 된다 
//let db = { 
// cStr_1 = ['movie','tv];
// cStr_2 = ['upcoming','popular','top_rated'];
// img_origin = 'https://image.tmdb.org/t/p/original/';
//img_poster = 'https://image.tmdb.org/t/p/w500/';
//db_All : function(){ //전체
//let a =  themoviedb.get(`${this.cStr_1[0]}/${this.cStr_2[1]}`),
//    b = themoviedb.get(`${this.cStr_1[0]}/${this.cStr_2[2]}`);
//
// promise.all([a,b]) //axios문법
// .then((result)=>{
//
//});
//}, 
//db_Movie : function(){}, //영화
//db_Tv : function(){}, //TV
//}
// db.db_All 을 실행시켜주면 데이터 잘 들어옴~ 
// themoviedb.get('/movie/popular');인기 영화 20개 
//.then(res=>{
//  
// });을 써서 값을 가져와야 한다






function App() {

  return (
    <>
      <BrowserRouter>
        <header>
        <nav>
          <div className='header1'>
          <Link to ="/">YFLIX</Link>
          </div>
          <div className='header2'>
          <Link to ="/"> HOME </Link>
          <Link to ="/Movies"> Movies</Link>
          <Link to ="/Tvs"> TV series</Link>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/'  element={<List/>}/>
          <Route path ='/Movies' element={<Movies/>}/>
          <Route path ='/Tvs' element={<Tvs/>}/>
        </Routes>
      </main>
      </BrowserRouter>
      </>
  )
}

export default App;
