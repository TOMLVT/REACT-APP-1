import React from 'react'
import LoginUser from './pages/LoginUser'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TodoList from './pages/todoList';
import SplitTab from './pages/SplitTab';
import ChangeImage from './pages/ChangeImage';
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
          </Routes>
        </Router>
         
    </div>
  )
}

export default App
