import React, { Component } from 'react';

// Externals
import Field from './Field';
import Button from './Button';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      jobTitle: '',
      workType: '',
      email: '',
      phone: '',
      budget: '',
      message: '',
      error: { name: '', job: '', mail: '', phone: '', message: '' },
      border: { name: '', job: '', mail: '', phone: '', message: '' },
      option: ['Work type', 'val2', 'val3'],
      content: [
        { label: '', placeholder: 'Full Name' },
        { label: '', placeholder: 'Job title' },
        { label: '', placeholder: 'Email' },
        { label: '', placeholder: 'Project Budget' },
        { label: '', placeholder: 'Message' }
      ],
      labelClass: 'changelabel'
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }
  
  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }
  handlerFocus = (input) => {
    this.setState({
      [input]: true
    });
  };

  handlerBlur = (input) => {
    this.setState({
      [input]: false
    });
  };
  render() {
    return (
      <form >
        {/* Name field */}
        <div className="row">
          <div className="col-md-6">
            <Field
              label="Full Name *"
              onChange={(event) => this.updateField('name', event.target.value)}
              value={this.state.name}
              onFocus={() => this.handlerFocus('nameFocus')}
              onBlur={() => this.handlerBlur('nameFocus')}
              labelClass={this.state.nameFocus || this.state.name !== '' ? '' : 'changelabel'}
              error={this.state.error.name}
              border={this.state.border.name}

            />
          </div>
          <div className="col-md-6">
            <Field
              label='Job title'
              onChange={(event) => this.updateField('jobTitle', event.target.value)}
              value={this.state.jobTitle}
              onFocus={() => this.handlerFocus('jobFocus')}
              onBlur={() => this.handlerBlur('jobFocus')}
              labelClass={this.state.jobFocus || this.state.jobTitle !== '' ? '' : 'changelabel'}
              error={this.state.error.job}
              border={this.state.border.job}
            />
          </div>
        </div>
        {/* Email field */}
        <div className="row">
          <div className="col-md-6">
            <Field
              label='Email *'
              onChange={(event) => this.updateField('email', event.target.value)}
              value={this.state.email}
              onFocus={() => this.handlerFocus('emailFocus')}
              onBlur={() => this.handlerBlur('emailFocus')}
              labelClass={this.state.emailFocus || this.state.email !== '' ? '' : 'changelabel'}
              error={this.state.error.mail}
              border={this.state.border.mail}
            />
          </div>
          <div className="col-md-6">
            <Field
              label='Phone Number *'
              onChange={(event) => this.updateField('phone', event.target.value)}
              value={this.state.phone}
              type="tel"
              onFocus={() => this.handlerFocus('numberFocus')}
              onBlur={() => this.handlerBlur('numberFocus')}
              labelClass={this.state.numberFocus || this.state.phone !== '' ? '' : 'changelabel'}
              error={this.state.error.phone}
              border={this.state.border.phone}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* <Select
          placeholder={this.state.content[3].placeholder}
          onChange={(event) => this.updateField('workType', event.target.value)}
          value={this.state.workType}
         option={options}
        /> */}
            
            {/* <Multiselect
              placeholder="Select all that apply"
              options={
                data.full_services.map(ser => {
                  return { value: ser.title };
                })}
              multiple
            /> */}

            <Field
              label='Project Type'
              onChange={(event) => this.updateField('workType', event.target.value)}
              value={this.state.workType}
              onFocus={() => this.handlerFocus('workTypeFocus')}
              onBlur={() => this.handlerBlur('workTypeFocus')}
              placeholder={this.state.workTypeFocus ? 'Ex: Logo, Company Website, Mobile App, Web App, ...': ''}
              labelClass={this.state.workTypeFocus || this.state.workType !== '' ? '' : 'changelabel'}
          />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Field
              label='Project Budget'
              onChange={(event) => this.updateField('budget', event.target.value)}
              value={this.state.budget}
              placeholder={this.state.BudgetFocus ? '' : ''}
              onFocus={() => this.handlerFocus('BudgetFocus')}
              onBlur={() => this.handlerBlur('BudgetFocus')}
              labelClass={this.state.BudgetFocus || this.state.budget !== '' ? '' : 'changelabel'}
            />
          </div>
        </div>
        {/* Message textarea */}
        <div className="row">
          <div className="col-md-12">
            <Field
              label='Message *'
              onChange={(event) => this.updateField('message', event.target.value)}
              value={this.state.message}
              onFocus={() => this.handlerFocus('messageFocus')}
              onBlur={() => this.handlerBlur('messageFocus')}
              labelClass={this.state.messageFocus || this.state.message !== '' ? '' : 'changelabel'}
              error={this.state.error.message}
              border={this.state.border.message}
            />
          </div>
        </div>
        {/* Submit button */}
        <div className="row">
          <div className="col-md-12">
            <Button
              formValues={this.state}
              type="submit"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;