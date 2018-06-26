import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

const Profile = ({ user }) => (
  <Card className="topPadding container">
     <CardBody>
       <CardTitle>Profile</CardTitle>
       <CardSubtitle>This is your profile</CardSubtitle>
    </CardBody>
  </Card>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default Profile;
