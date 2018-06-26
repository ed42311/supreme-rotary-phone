import  React from 'react';
import { Jumbotron} from 'reactstrap';
import Auth from '../modules/Auth';

const HomePage = () => (
  <Jumbotron className="text-center">
    <h1 className="display-3">Bicycle Bonanza</h1>
    <p className="lead">
      This is the home page.
    </p>
    <hr className="my-2" />
    {Auth.isUserAuthenticated() ? (
      <h3 style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</h3>
    ) : (
      <h3 style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</h3>
    )}
  </Jumbotron>
)




export default HomePage;
