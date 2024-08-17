import React from 'react'
import LoginUser from './pages/LoginUser'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TodoList from './pages/todoList';
const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/login' element={ <LoginUser/>}/>
            <Route path='/todolist' element={ <TodoList/>}/>
          </Routes>
        </Router>
         
    </div>
  )
}

export default App
