import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    } else {
      alert('You cannot add an empty task!');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, keyIndex) => keyIndex !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, keyIndex) =>
      keyIndex === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='container_body'>
      <div className='Box_all_List'>
        <p className='title_todo'>ToDo - List</p>

        <input
          placeholder='Enter your task...'
          className='input_todo'
          onChange={handleNewTask}
          value={newTask}
        />

        <button className='btn_add_todo' onClick={handleAddTask}>
          Add Task
        </button>

        <ul className='ul_todo'>
          {tasks.map((task, index) => (
            <li
              key={index}
              className='li_todo'
              onClick={() => handleToggleComplete(index)}
              style={{
                backgroundColor: task.completed ? 'red' : '#efeded',
                color: task.completed ? 'white' : 'black',
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              <p className='text_todo'>{task.text}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Ngăn sự kiện lan truyền
                  handleDelete(index);
                }}
                className='button_close_todo'
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: task.completed ? 'white' : 'black',
                  fontSize: '16px',
                }}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
        <div className='box_again'>
         <FontAwesomeIcon icon={faArrowLeft} /> 
         <Link to="/" className='Page_again'>Quay lại</Link>
         </div>
      </div>
      
    </div>
  );
};

export default TodoList;
