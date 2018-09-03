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
      salary: ""
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

  validateStep = (event) => {
    console.log(event) 
  }

  validateCurrentStep = (currentElementValue) => {
    console.log(Object.values(currentElementValue))
    if(typeof currentElementValue === 'object') {
      return !Object.values(currentElementValue).includes("")
    }
    return currentElementValue.length ? true : false
  }

  submitForm = () => {
    console.log("Woohoo, you submitted!", this.state)
    this.setState({
      completed: 100
    })
  }

  render() {
    const { formData } = this.state
    const formElements = [
      <Name 
        onChange={this.onChangeFieldHandler} 
        value={formData.name} 
        validateStep={this.validateStep}
      />,
      <ContactDetails 
        onChange={this.onChangeFieldHandler} 
        value={{emailValue: formData.email, phoneValue: formData.phone}} 
        phoneValue={formData.phone} 
        validateStep={this.validateStep}
      />,
      <Salary   
        onChange={this.onChangeFieldHandler} 
        value={formData.salary} 
        validateStep={this.validateStep}
      />
    ]
    console.log(this.validateCurrentStep(formElements[this.state.stepIndex].props.value))
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
          this.validateCurrentStep(formElements[this.state.stepIndex].props.value) &&
          <Button onClick={this.changeStep.bind(null, 1, formElements.length)}>Next</Button>
        } 
        { 
          this.state.stepIndex === formElements.length - 1 &&
          this.state.completed !== 100 &&
          this.validateCurrentStep(formElements[this.state.stepIndex].props.value) &&
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