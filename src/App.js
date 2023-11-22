import './App.scss';
import { Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import $ from 'jquery';
import Selector from './pages/Selector';
import Scroll from './pages/Scroll';
import JQuery from './pages/JQuery';
import Framer from './pages/Framer';
import Slide from './pages/Slide';
import ReactVideo from './pages/RectVideo';



function App() {
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to ='/'>Selector(useRef)</Link>
      <Link to ='/scroll'>Scroll Event</Link>
      <Link to ='/jqurey'>jQuery</Link>
      <Link to ='/framer'>Framer Motion</Link>
      <Link to ='/slide'>Slide Swiper</Link>
      <Link to ='/video'>React video</Link>
    </nav>

    <main>
      <Routes>
        <Route path='/' element = {<Selector/>}/>
        <Route path='/scroll' element = {<Scroll/>}/>
        <Route path='/jqurey' element = {<JQuery/>}/>
        <Route path='/framer' element = {<Framer/>}/>
        <Route path='/slide' element = {<Slide/>}/>
        <Route path='/video' element = {<ReactVideo/>}/>
      </Routes>
    </main>
    </BrowserRouter>
    </>
  );
}

export default App;
