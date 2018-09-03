import React from 'react';
import ProgressBar from './ProgressBar';
import Name from './formElements/Name';
import ContactDetails from './formElements/ContactDetails';
import Salary from './formElements/Salary';
import Summary from './Summary'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { CardContent, CardActions } from '@material-ui/core';

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
    })
  }


  changeStep = (change = 1, length) => {
    this.setState({
      stepIndex: this.state.stepIndex + change,
      completed: change > 0 ? this.state.completed + (100/length) : this.state.completed - (100/length)
    })
  }

  validateCurrentStep = (currentElementValue) => {
    if(typeof currentElementValue === 'object') {
      return !Object.values(currentElementValue).includes("")
    }
    return currentElementValue.length ? true : false
  }

  submitForm = () => {
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
      />,
      <ContactDetails 
        onChange={this.onChangeFieldHandler} 
        value={{emailValue: formData.email, phoneValue: formData.phone}} 
        phoneValue={formData.phone} 
        firstName={formData.name.split(' ')[0]}
      />,
      <Salary   
        onChange={this.onChangeFieldHandler} 
        value={formData.salary} 
      />
    ]

    return (
      <Card className={this.props.classes.root} elevation={2}>
        <CardContent>
          <ProgressBar value={this.state.completed} />
          {
            this.state.completed !== 100 && formElements[this.state.stepIndex]
          }
          { 
            this.state.completed === 100 &&
            <Summary formData={this.state.formData} />
          }
          </CardContent>
          <CardActions className={this.props.classes.actions}>
            {
              this.state.stepIndex > 0 && 
              this.state.completed !== 100 &&
              <Button className={this.props.classes.prevButton} onClick={this.changeStep.bind(null, -1, formElements.length)}>Previous</Button>
            }
            {
              this.state.stepIndex < formElements.length - 1 &&
              this.state.completed !== 100 &&
              this.validateCurrentStep(formElements[this.state.stepIndex].props.value) &&
              <Button className={this.props.classes.rightButton} onClick={this.changeStep.bind(null, 1, formElements.length)}>Next</Button>
            } 
            { 
              this.state.stepIndex === formElements.length - 1 &&
              this.state.completed !== 100 &&
              this.validateCurrentStep(formElements[this.state.stepIndex].props.value) &&
              <Button className={this.props.classes.rightButton} onClick={this.submitForm}>Submit</Button> 
            }
          </CardActions>

      </Card>
    )
  };
}

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '10% auto',
    minWidth: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightButton: {
    marginLeft: 'auto'
  }
});

export default withStyles(styles)(FormContainer)