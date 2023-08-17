import Checkname from './Checkname';
import './App.css';
import Write from './pages/Write';
import List from './pages/List';
import{useState} from 'react';

function App() {
  const[state,setState] = useState(false);
  
  return (
    <article>
      <button onClick={()=>{setState((e) => !e)}}>+</button>
    <Checkname>
      <div className={state?'active':''}>
      <Write/>
      </div>
      <List/>
    </Checkname>
    </article>
    
  );
}

export default App;
