import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Salary(props) {

  return (
    <div>
      <TextField name="salary" label="Salary indication" onChange={props.onChange}/> 
    </div>
  )
}