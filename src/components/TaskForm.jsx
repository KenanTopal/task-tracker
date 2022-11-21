import { Card, CardContent, TextField, Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState} from 'react'

const TaskForm = ({ addNewTask}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState('');


  const addTask = (e) => { 
    const task = {id:Date.now(), title, date: new Date(date), isCompleted: false}
    addNewTask(task);
    setTitle("");
    setDate("");
  }

  return (
    
    <form>
      <Card sx={ { mt: 5 , boxShadow: 2} }>
        <CardContent>

          <Typography variant="h5" align="center" mb={ 2}> ADD TASK</Typography>
          <TextField variant='outlined'
            label="Title" fullWidth
            onChange={ (e) => setTitle(e.target.value) }
            value={ title}
          />
          

          <input type="date"
            style={ { marginTop: '10px', width: '100%', height: '23px', padding: '14px' } }
            onChange={ (e) => setDate(e.target.value) }
            value={ date}
          />

          <Box sx={ { mt:2} } align="center">
            <Button color="secondary" variant="contained" onClick={addTask }> ADD</Button>
          </Box>
        </CardContent>
      </Card>

    </form>
  )
}

export default TaskForm