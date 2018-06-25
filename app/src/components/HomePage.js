import  React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody} from 'reactstrap';
import Auth from '../modules/Auth';

class HomePage extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Card className="container">
        <CardBody>
          <CardTitle>React Application</CardTitle>
          <CardSubtitle>This is the home page.</CardSubtitle>
            {Auth.isUserAuthenticated() ? (
              <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
            ) : (
              <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
            )}
        </CardBody>
      </Card>
    )
  }
};

export default HomePage;
