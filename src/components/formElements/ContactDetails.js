import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function ContactDetails(props) {

  return (
    <div>
      <TextField name="email" label="Email address" onChange={props.onChange}/> 
      <TextField name="phone" label="Phone number" onChange={props.onChange}/> 
    </div>
  )
}