import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

<ProfileForm
     onChange={this.onChange}
     onSubmit={this.processForm}
     user={this.state.user}
   />
{
  this.state.editing ?
    <Profile
      user={this.state.user}
    />
  :
    <ProfileForm
      onChange={this.onChange}
      onSubmit={this.processForm}
      user={this.state.user}
    />
}
