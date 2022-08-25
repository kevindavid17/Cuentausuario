import Main from './Views/main';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css';
import Detail from './Views/Detail';
import Update from './Views/Update';
import MainRegister from './Views/MainRegister';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element = {<MainRegister/>}/>
          <Route path="/people" element = {<Main/>}/>
          <Route exact path="/person/:id" element = {<Detail/>}/>
          <Route exact path="/person/:id/edit" element = {<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;