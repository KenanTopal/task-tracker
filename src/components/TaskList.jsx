import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material'
import TaskItem from './TaskItem/TaskItem'

const TaskList = ({ tasks, toggleComplete, removeTask}) => {
  return (
    <List sx={ {mt:5, boxShadow: 1, p:1} }>

      { tasks.length >= 1 ? (
        <>
          { tasks.map((task) =>
            <TaskItem key={ task.id } task={ task } onComplete={ toggleComplete } onDelete={ removeTask } />
          ) }
        </>
      ): (
          <ListItem>
            <ListItemText primary="No Tasks add one!" />
          </ListItem>
      ) }

      
    </List>
  )
}

export default TaskList