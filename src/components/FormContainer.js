import React from 'react';
import ProgressBar from './ProgressBar';

export default class FormContainer extends React.Component {
  state = {
    completed: 0
  };

  render() {
    return (
      <div>
        <ProgressBar completed={this.state.completed} />
      </div>
    )
  };
}