
import './App.scss';
import Css from './page/Css';
import Home from './page/Home';
import Image from './page/Image';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import Not from './page/Not';
import Router from './page/Router';
import StateProps from './page/StateProps';




function App() {
  return (
    <BrowserRouter>
   <div className ="wrap">
    <header>
      <nav style={{border:'1px solid white'}}>
      <Link to = "/"> HOME </Link> 
        <Link to = "/css"> css 활용 </Link> 
        <Link to = "/image"> img 활용 </Link>
        <Link to = "/Router" state ='a100'> router(페이지이동) </Link>
        <Link to = "/props"> state&props </Link>
    
      </nav>
    </header>
      <main>
        <Routes>
          <Route path = '/' element ={<Home/>}/>
          <Route path = '/css' element ={<Css/>}/>
          <Route path = '/image' element ={<Image/>}/>
          <Route path = '/Router' element ={<Router/>}/>
          <Route path = '/props' element ={<StateProps data='1000' name='props'/>}/>
          <Route path = '/*' element ={<Not/>}/>
        </Routes>
      </main>
   </div>
   </BrowserRouter>
  );
}

export default App;
