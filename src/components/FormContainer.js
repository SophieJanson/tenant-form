import React from 'react';
import ProgressBar from './ProgressBar';
import Name from './formElements/Name';
import ContactDetails from './formElements/ContactDetails';
import Salary from './formElements/Salary';
import Summary from './Summary'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class FormContainer extends React.Component {
  state = {
    completed: 0,
    formData: {
      name: "",
      email: "",
      phone: "",
      salary: "0"
    },
    stepIndex: 0
  };

  onChangeFieldHandler = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    }, console.log(this.state))
  }


  changeStep = (change = 1, length) => {
    this.setState({
      stepIndex: this.state.stepIndex + change,
      completed: change > 0 ? this.state.completed + (100/length) : this.state.completed - (100/length)
    })
  }

  submitForm = () => {
    console.log("Woohoo, you submitted!", this.state)
    this.setState({
      completed: 100
    })
  }

  render() {
    const formElements = [
      <Name 
        onChange={this.onChangeFieldHandler} 
        value={this.state.formData.name} 
      />,
      <ContactDetails 
        onChange={this.onChangeFieldHandler} 
        emailValue={this.state.formData.email} 
        phoneValue={this.state.formData.phone} 
      />,
      <Salary   
        onChange={this.onChangeFieldHandler} 
        value={this.state.formData.salary} 
      />
    ]

    return (
      <Paper className={this.props.classes.root} elevation={2}>
        <ProgressBar value={this.state.completed} />
        {
          this.state.completed !== 100 && formElements[this.state.stepIndex]
        }
        {
          this.state.stepIndex > 0 && 
          this.state.completed !== 100 &&
          <Button onClick={this.changeStep.bind(null, -1, formElements.length)}>Previous</Button>
        }
        {
          this.state.stepIndex < formElements.length - 1 &&
          this.state.completed !== 100 &&
          <Button onClick={this.changeStep.bind(null, 1, formElements.length)}>Next</Button>
        } 
        { 
          this.state.stepIndex === formElements.length - 1 &&
          this.state.completed !== 100 &&
          <Button onClick={this.submitForm}>Submit</Button> 
        }
        { 
          this.state.completed === 100 &&
          <Summary formData={this.state.formData} />
        }
      </Paper>
    )
  };
}

const styles = theme => ({
  root: {
    //paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 'auto',
  },
});

export default withStyles(styles)(FormContainer)