import React from 'react';
import ProgressBar from './ProgressBar';
import Name from './formElements/Name';
import ContactDetails from './formElements/ContactDetails';
import Salary from './formElements/Salary';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class FormContainer extends React.Component {
  state = {
    completed: 0,
    name: "",
    email: "",
    phone: "",
    salary: "0"
  };

  onChangeFieldHandler = (event) => {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Paper className={this.props.classes.root} elevation={2}>
        <ProgressBar completed={this.state.completed} />
        <Name onChange={this.onChangeFieldHandler} />
        <ContactDetails onChange={this.onChangeFieldHandler} />
        <Salary onChange={this.onChangeFieldHandler} value={this.state.salary} />
      </Paper>
    )
  };
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 'auto'
  },
});

export default withStyles(styles)(FormContainer)