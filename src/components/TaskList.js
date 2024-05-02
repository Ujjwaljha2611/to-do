import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
    // Save tasks to local storage after toggling
    const updatedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', updatedTasks);
  };

  return (
    <div className="mt-8 bg-gray-100 p-4 rounded-lg w-[50%]">
    <div>Task Lists</div>
      <div className="bg-white p-4 rounded-lg">
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between mb-2">
              <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => handleToggleTask(task.id)}
                className={`cursor-pointer ${task.completed ? 'text-gray-400' : 'text-gray-800'}`}
              >
                {task.name}
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
