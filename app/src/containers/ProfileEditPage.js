import React from 'react';
import Auth from '../modules/Auth';
import ProfileForm from '../components/ProfileForm';

export class ProfileEditPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(){
     console.log('process');
  }

  onChange(){
     console.log('change');
  }

  componentDidMount() {

  }

  render() {
    return (
      <ProfileForm
        onSubmit={this.processForm}
        onChange={this.onChange}
        user={user}
      />
    );
  }

}
