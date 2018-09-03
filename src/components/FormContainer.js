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
    stepIndex: 0
  };

  onChangeFieldHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(this.state))
  }

  changestepIndex = (change = 1) => {
    console.log(change)
    this.setState({
      stepIndex: this.state.stepIndex + change
    })
  }

  submitForm = () => {
    console.log("Woohoo, you submitted!", this.state)
  }

  render() {
    const formElements = [
      <Name onChange={this.onChangeFieldHandler}/>,
      <ContactDetails onChange={this.onChangeFieldHandler} />,
      <Salary onChange={this.onChangeFieldHandler} value={this.state.salary} />
    ]

    return (
      <Paper className={this.props.classes.root} elevation={2}>
        <ProgressBar value={this.state.completed} />
        {formElements[this.state.stepIndex]}

        {this.state.stepIndex > 1 && <Button onClick={this.changestepIndex.bind(null, -1)}>Previous</Button>}
        {this.state.stepIndex < formElements.length - 1 ? <Button onClick={this.changestepIndex.bind(null, 1)}>Next</Button> :
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