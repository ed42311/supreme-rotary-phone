import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard';


class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {}
    };
  }

   componentDidMount() {
     fetch('/api/dashboard', {
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
           secretData: data.response.message,
           user: data.response.user
         })
       }
     })
   }

  render() {
    return (
      <Dashboard
        secretData={this.state.secretData}
        user={this.state.user}
      />
    );
  }

}

export default DashboardPage;
