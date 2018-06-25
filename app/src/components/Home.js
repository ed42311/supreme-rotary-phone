import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Snorting Noises App</h1>
        <p className="lead">
          This app is going to send you snorting noises from time to time
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
