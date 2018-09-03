import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function ContactDetails(props) {
  return (
    <div>
      <TextField name="email" type="email" label="Email address" required onChange={props.onChange}/> 
      <TextField name="phone" type="text" label="Phone number" required onChange={props.onChange}/> 
    </div>
  )
}

