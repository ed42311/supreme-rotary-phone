import React from 'react';
import PropTypes from 'prop-types';

const ProfileForm = ({ user }) => (
  <form action={`/image_upload/${user._id}`} method="post" enctype="multipart/form-data">
    <input type="file" name="myimage"/>
    <input type="text" name="owner" placeholder="imageOwner"/>
    <input type="text" name="description" placeholder="imageDescription"/>
    <button type="submit" name="submit" value="submit">Button</button>
  </form>
);

ProfileForm.propTypes = {
  user: PropTypes.object.isRequired
};

export default ProfileForm;
