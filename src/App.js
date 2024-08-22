import React from 'react'
import LoginUser from './pages/LoginUser'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TodoList from './pages/todoList';
import SplitTab from './pages/SplitTab';
import ChangeImage from './pages/ChangeImage';
import DragDrop from './pages/DragDrop';
import CodeCreateqr from './pages/codeCreateqr';
import ViewAndHide from './pages/ViewAndHide/ViewAndHide';
import SelectProduct from './pages/SelectProduct/SelectProduct';
import Calculation from './pages/Calculationn/Calculation';

const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/login' element={ <LoginUser/>}/>
            <Route path='/todolist' element={ <TodoList/>}/>
            <Route path='/tab' element={ <SplitTab/>}/>
            <Route path='/change' element={ <ChangeImage/>}/>
            <Route path='/dragdrop' element={ <DragDrop/>}/>
            <Route path='/qrcode' element={ <CodeCreateqr />}/>
            <Route path='/more' element={ <ViewAndHide />}/>
            <Route path='/select' element={ <SelectProduct />}/>
            <Route path='/calculation' element={ <Calculation />}/>
          </Routes>
        </Router>
         
    </div>
  )
}

export default App
