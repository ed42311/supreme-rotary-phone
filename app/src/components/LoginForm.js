import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button, Card, CardText} from 'reactstrap';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
  <Card className="topPadding container">
    <Form onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            onChange={onChange}
          />
        </FormGroup>
        <Button color="primary" type="submit">Submit</Button>
    </Form>
    <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
