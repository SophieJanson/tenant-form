import React from 'react';

export default class Summary extends React.PureComponent {
  render() {
    const {name, email, phone, salary } = this.props.formData
    return(
      <div>
        <h2>Thank you! We'll be in touch shortly.</h2>
        <h3>Summary</h3>
        <p>{`Your name: ${name}`}</p>
        <p>{`Your email address: ${email}`}</p>
        <p>{`Your phone number: ${phone}`}</p>
        <p>{`Your salary group: ${salary}`}</p>
      </div>
    )
  }
}