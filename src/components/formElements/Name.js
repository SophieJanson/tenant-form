import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function Name(props) {

  return (
    <FormControl>
      <TextField required name="name" type="text" label="Full name" onChange={props.onChange}/> 
    </FormControl>
  )
}