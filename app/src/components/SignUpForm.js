import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Button, Input, Card, CardText, Label } from 'reactstrap';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Card className="container">
    <Form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>
      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <FormGroup>
        <Label for="name">name</Label>
        <Input
          type="name"
          name="name"
          id="exampleName"
          placeholder="name"
          onChange={onChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="email"
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
      <Button type="submit" color="primary">Create New Account</Button>
    </Form>
    <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
