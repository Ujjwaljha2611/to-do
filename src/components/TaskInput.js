import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      dispatch(addTask({ id: Date.now(), name: taskName, completed: false }));
      setTaskName('');
    }
  };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleAddTask();
//     }
//   };

  return (
    <div className="my-4 bg-gray-200 p-4 rounded-lg w-[50%] flex justify-center">
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        // onKeyPress={handleKeyPress}
        className="px-3 py-2 rounded border focus:outline-none focus:border-blue-500 bg-white w-[80%]"
      />
      <button
        onClick={handleAddTask}
        className="ml-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
