import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function Name(props) {
  const onChangeHandler = (event) => {
    props.onChange(event)
    props.validateStep(!!event.target.value)
  }

  return (
    <FormControl>
      <TextField 
        required 
        name="name" 
        type="text" 
        label="Full name" 
        fullWidth={true} 
        onChange={onChangeHandler}
      /> 
    </FormControl>
  )
}