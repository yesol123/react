
import './App.scss';
import {Link,BrowserRouter,Routes,Route} from 'react-router-dom';
import ParamItem from './pages/ParamItem';
import Item from './pages/Item';
import data from './data.json';


function App() {
  return (
    
  <BrowserRouter>
    <nav>
    <Link to="/">메뉴를 골라주세요 </Link>
    </nav>

    <main>
    <Routes>
    <Route path='/' element = {<Item data={data}/>}/>
    <Route path='/paramItem/:code' element = {<ParamItem data={data}/>}/>
    </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
