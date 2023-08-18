import './App.css';
import { Context } from './Context';
import Write from './component/Write';
import List from './component/List';

function App() {
  return (
  <Context>
  <Write />
  <List />
  </Context>
  );
}

export default App;
