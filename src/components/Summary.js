import React from 'react';

export default class Summary extends React.PureComponent {
  render() {
    const {name, email, phone, salary } = this.props.formData
    return(
      <div>
        <h3>Thank you, that's all I need to know! Here's what I learned about you: </h3>
        <p>{`Your name is ${name}.`}</p>
        <p>{`I can reach you at ${email} or ${phone}.`}</p>
        <p>
          {
            `When looking for the perfect home for you, 
            I will look at homes that are affordable with an income of ${salary}. I'll be in touch shortly!`
          }
        </p>
      </div>
    )
  }
}