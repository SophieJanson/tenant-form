import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function ContactDetails(props) {
  const onChangeHandler = (event) => {
    props.onChange(event)
  }

  return (
    <form onChange={onChangeHandler}>
      <TextField name="email" type="email" label="Email address" value={props.emailValue} required /> 
      <TextField name="phone" type="text" label="Phone number" value={props.phoneValue} required/> 
    </form>
  )
}

