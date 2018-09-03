import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Name(props) {

  return (
    <div>
      <TextField name="name" label="Full name" onChange={props.onChange}/> 
    </div>
  )
}