import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      workType: PropTypes.string,
      phone: PropTypes.number,
      budget: PropTypes.string,
      message: PropTypes.string,
      error: PropTypes.object,
      border: PropTypes.object,
      errStyle: PropTypes.object,
      style: PropTypes.object,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      mailBody: `From: ${this.props.formValues.name}%0D%0A
      Email: ${this.props.formValues.email}%0D%0A
      Job title: ${this.props.formValues.jobTitle}%0D%0A
      Phone Number: ${this.props.formValues.phone}%0D%0A
      Work type: ${this.props.formValues.workType}%0D%0A
      Budget: ${this.props.formValues.budget}%0D%0A
      Message: ${this.props.formValues.message}`,
      href: `#`,
      success: '',
      submiting: 'SUBMIT'
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }



  logFormDataToConsole(event) {
    this.setState({ isClicked: true });
    //validation

    if (this.props.formValues.name === '' || this.props.formValues.message === '' || this.props.formValues.phone === '' || !this.props.formValues.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        href: '#',
        success: ''
      })
    } else {
      this.setState({
        submiting: 'SUBMITTING ...'
      })

      var formData = new FormData();

      formData.append('full-name', this.props.formValues.name);
      formData.append('email', this.props.formValues.email);
      formData.append('mobile', this.props.formValues.jobTitle);
      formData.append('job-title', this.props.formValues.phone);
      formData.append('project-type', this.props.formValues.workType);
      formData.append('project-budget', this.props.formValues.budget);
      formData.append('message', this.props.formValues.message);

      fetch('https://addictaco.com/sendmail/sendMail.php', {
        method: 'POST',
        body: formData
      })
        .then(response => response.text())
        .catch(error => console.error('Error:', error))
        .then(response => {
          this.setState({
            success: '- Message Sent',
            submiting: 'SUBMIT'
          })
          console.log(`Success: ${response}`);
        });
    }

    if (this.props.formValues.name === '') {
      this.props.formValues.error.name = 'You have to enter your full name.'
      this.props.formValues.border.name = 'border-color'
    } else {
      this.props.formValues.error.name = ''
      this.props.formValues.border.name = ''
    }
    if (this.props.formValues.phone === '') {
      this.props.formValues.error.phone = 'You have to enter your phone number.'
      this.props.formValues.border.phone = 'border-color'
    } else {
      this.props.formValues.error.phone = ''
      this.props.formValues.border.phone = ''
    }
    if (this.props.formValues.message === '') {
      this.props.formValues.error.message = 'You have to enter message.'
      this.props.formValues.border.message = 'border-color'
    } else {
      this.props.formValues.error.message = ''
      this.props.formValues.border.message = ''
    }
    if (!this.props.formValues.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.props.formValues.error.mail = 'Invalid mail'
      this.props.formValues.border.mail = 'border-color'
    } else {
      this.props.formValues.error.mail = ''
      this.props.formValues.border.mail = ''
    }
  }

  render() {
    return (
      <>
        <a
          disabled={this.state.isClicked}
          onClick={this.logFormDataToConsole}
          href={this.state.href}
          className="btn btn-main"
        >
          {this.state.submiting}
        </a>

        <span style={{ fontSize: '14px', display: 'block', marginTop: '20px' }}>{this.state.success ? <i style={{ color: '#0fe0c7' }} className="far fa-check-circle" /> : ''}{' ' + this.state.success}</span>
      </>
    );
  }
}

export default Button;