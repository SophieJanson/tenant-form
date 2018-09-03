import React from 'react';
import ProgressBar from './ProgressBar';
import Name from './formElements/Name';
import ContactDetails from './formElements/ContactDetails';
import Salary from './formElements/Salary';

export default class FormContainer extends React.Component {
  state = {
    completed: 0
  };

  onChangeFieldHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  render() {
    return (
      <div>
        <ProgressBar completed={this.state.completed} />
        <Name onChange={this.props.onChangeFieldHandler} />
        <ContactDetails onChange={this.props.onChangeFieldHandler} />
        <Salary onChange={this.props.onChangeFieldHandler} />

      </div>
    )
  };
}