import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function ContactDetails(props) {
  const onChangeHandler = (event) => {
    props.onChange(event)
    props.validateStep(!!props.emailValue && !!props.phoneValue)
  }

  return (
    <form onChange={onChangeHandler}>
      <TextField name="email" type="email" label="Email address" value={props.value.emailValue} required /> 
      <TextField name="phone" type="text" label="Phone number" value={props.value.phoneValue} required/> 
    </form>
  )
}

