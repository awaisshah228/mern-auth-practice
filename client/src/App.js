import logo from './logo.svg';
import './App.css';
import Router from './Router';
import axios from 'axios';

axios.defaults.withCredentials=true
function App() {
  return (
    <div className="App">
      <h1>My name is Awais Shah</h1>
      <Router/>
    </div>
  );
}

export default App;
