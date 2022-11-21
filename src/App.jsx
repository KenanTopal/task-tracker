import { useState } from 'react';
import { Container } from "@mui/material";
import Navigation from "./components/Navigation";


import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  
  // Toggle task complete 
  const toggleComplete = (id) => { 
    // find the index of the task in the tasks array
    let index = tasks.findIndex(task => task.id === id); 
    // make a copy of the tasks 
    let updatedTasks = [...tasks];
    // toggle the isComplete property
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted
    setTasks(updatedTasks);
  }

  // Delete task
  const removeTask = (id) => { 
    let updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks)
  }

  // toggle Add Form 
  const toggleForm = () => { 
    // setShow(!show)
    setShow((prevState)=> !prevState)
  }

  // Add a task
  const addNewTask = (task) => { 
    let updatedTasks = [...tasks];
    updatedTasks.unshift(task);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <Navigation show={ show } toggleForm={toggleForm } />
      <Container maxWidth="sm">
        { show && <TaskForm addNewTask={addNewTask } /> }
        <TaskList tasks={ tasks } toggleComplete={ toggleComplete } removeTask={ removeTask} />
      </Container>
    </div>
  );
}

export default App;