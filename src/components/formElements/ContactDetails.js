import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function ContactDetails(props) {
  return (
    <FormControl onChange={props.onChange}>
      <TextField name="email" type="email" label="Email address" value={props.emailValue} required /> 
      <TextField name="phone" type="text" label="Phone number" value={props.phoneValue} required/> 
    </FormControl>
  )
}

