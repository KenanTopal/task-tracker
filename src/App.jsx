
import { dividerClasses } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';




function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false)
  //Toggle
  const toggleComplete = (id) => {
    // find the index of the task ind the tasks array
    let index = tasks.findIndex(task=> task.id === id);
    // make a copy of the tasks
    let updatedTasks = [...tasks]
    // toggle the isComplete property
    updatedTasks[index].isCompleted = !updatedTasks[index].isComplete
    setTasks(updatedTasks);
  }

  //Delete Task
  const removeTask = (id) =>{
    let updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks)
  }

  //toggle Add Form
  const toggleForm = () => {
    // setShow(!show)
    setShow((prevState)=> !prevState)
  }

  // Add a task
  const addNewTask = (task) => {
    let updatedTasks = [...tasks];
    updatedTasks.unshift(task);
    setTasks(updatedTasks)
  }

  return (
    <div>
      <Navigation show={show} toggleForm={toggleForm}/>
      <Container maxWidth="md">
        {show && <TaskForm addNewTask={addNewTask} />}
        <TaskList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask}/>
      </Container>
    </div>
  );
}

export default App;
