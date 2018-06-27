import React from 'react';
import Auth from '../modules/Auth';
import Profile from '../components/Profile';
import ProfileForm from '../components/ProfileForm';
import {
  Button
 } from 'reactstrap';

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      editing: false
    };
    this.processForm = this.processForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.meow = this.meow.bind(this);
  }

  processForm(){
     console.log('process');
  }

  onChange(){
     console.log('change');
  }

  meow(evt) {
    evt.preventDefault();
    this.setState({
      editing: !this.state.editing
    })
  }

  componentDidMount() {
    fetch('/api/profile', {
      method: 'GET',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        Authorization: `bearer ${Auth.getToken()}`
      }
    })
    .then ( ( res )  => { return res.json() })
    .then ( ( data ) => {
      if(data.status === 200){
        this.setState({
          user: data.response.user
        })
      }
    })
  }

  render() {
    let stuffToShow = this.state.editing ? <ProfileForm user={this.state.user} /> : <Profile user={this.state.user} />
    return (
      <div>
        {stuffToShow}
        <Button onClick={this.meow}>Hello</Button>
      </div>
    );
  }

}

export default ProfilePage;
