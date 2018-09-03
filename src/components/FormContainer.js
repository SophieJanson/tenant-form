import React from 'react';
import ProgressBar from './ProgressBar';
import Name from './formElements/Name';
import ContactDetails from './formElements/ContactDetails';
import Salary from './formElements/Salary';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
class FormContainer extends React.Component {
  state = {
    completed: 0,
    name: "",
    email: "",
    phone: "",
    salary: "0",
    step: 1
  };

  onChangeFieldHandler = (event) => {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(this.state))
  }

  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    })
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  submitForm = () => {
    console.log(this.state)
  }

  render() {
    return (
      <Paper className={this.props.classes.root} elevation={2}>
        <ProgressBar value={this.state.completed} />
        {this.state.step === 1 && <Name onChange={this.onChangeFieldHandler} />}
        {this.state.step === 2 && <ContactDetails onChange={this.onChangeFieldHandler} />}
        {this.state.step === 3 && <Salary onChange={this.onChangeFieldHandler} value={this.state.salary} />}

        {this.state.step > 1 && <Button onClick={this.prevStep}>Previous</Button>}
        {this.state.step < 3 ? <Button onClick={this.nextStep}>Next</Button> :
          <Button onClick={this.submitForm}>Submit</Button>
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