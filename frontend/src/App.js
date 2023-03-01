import './App.css';
import Home from './pages/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import JoinForm from './pages/join.js';
import User from './pages/user.js';
import Add from './pages/add.js';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route  path = '/' element = {<Home/>}/>
          <Route  path = '/join' element = {<JoinForm/>}/>
          <Route  path = '/user' element = {<User/>}/>
          <Route  path = '/add' element = {<Add/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
