import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Main from './component/Main';
import Signup from './component/Signup';
import Login from './component/Login';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Header/>
     
        <Routes>
        {user && <Route path="/" exact element={<Main />} />}
         {user && <Route path="/main" Component={Main}/>}
          <Route path='/content' Component={Content}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/login' Component={Login}/>
          <Route path="/" element={<Navigate replace to="/content" />} />
        </Routes>
      
     
    </div>
  );
}

export default App;


