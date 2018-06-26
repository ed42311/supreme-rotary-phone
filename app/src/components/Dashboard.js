import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

const Dashboard = ({ secretData, user }) => (
  <Card className="topPadding container">
     <CardBody>
       <CardTitle>Dashboard</CardTitle>
       <CardSubtitle>You should get access to this page only after authentication.</CardSubtitle>
      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}
    </CardBody>
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
