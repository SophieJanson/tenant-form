import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function Name(props) {
  const onChangeHandler = (event) => {
    props.onChange(event)
  }

  return (
    <div>
      <h2>Hi there, How may I call you?</h2>
      <FormControl>
        <TextField 
          required 
          name="name" 
          type="text" 
          label="Your full name" 
          fullWidth={true} 
          onChange={onChangeHandler}
        /> 
      </FormControl>
    </div>

  )
}