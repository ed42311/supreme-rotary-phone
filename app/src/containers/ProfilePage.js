import React from 'react';
import Auth from '../modules/Auth';
import Profile from '../components/Profile';


class ProfilePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
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
    return (
      <Profile
        user={this.state.user}
      />
    );
  }

}

export default ProfilePage;
