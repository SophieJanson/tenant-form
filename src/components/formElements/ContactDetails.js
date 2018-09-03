import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

function ContactDetails(props) {
  const onChangeHandler = (event) => {
    props.onChange(event)
  }

  return (
    <div>
      <h3>{`That's great, ${props.firstName}! How can I reach you?`}</h3>
      <form onChange={onChangeHandler}>
        <TextField 
          name="email" 
          type="email" 
          label="Email address" 
          value={props.value.emailValue} 
          fullWidth={false} 
          className={props.classes.textField}
          required 
        /> 
        <br />
        <TextField 
          name="phone" 
          type="text" 
          label="Phone number" 
          value={props.value.phoneValue} 
          fullWidth={false} 
          className={props.classes.textField}
          required/> 
      </form>
    </div>

  )
}

const styles = theme => ({
  textField: {
    display: 'inline-flex'
  }
})

export default withStyles(styles)(ContactDetails)


