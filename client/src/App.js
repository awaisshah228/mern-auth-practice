import logo from './logo.svg'
import './App.css'
import Router from './Router'
import axios from 'axios'
import {AuthContextProvider} from './context/AuthContext'

axios.defaults.withCredentials=true
function App() {
  return (
    <AuthContextProvider>
      <div className="App">
      <h1>My name is Awais Shah</h1>
      <Router/>
    </div>
    </AuthContextProvider>
    
  );
}

export default App;
