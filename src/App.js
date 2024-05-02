// src/App.js
import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="bg-blue-100 min-h-screen">
      
      <div className='flex flex-col justify-center items-center'>
        <div className='text-3xl mx-auto mt-6 select-none mb-3'>To-Do Application</div>
        <TaskInput />
        <TaskList />
      </div>


    </div>
  );
}

export default App;
