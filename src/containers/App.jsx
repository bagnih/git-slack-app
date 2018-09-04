import * as React from 'react';
import UsernameForm from '../components/UsernameForm';
import ChatScreen from './ChatsScreen';
import { connect } from 'react-redux';
import { store } from "../store/store";

function mapStateToProps(state) {
  return {
    registerUser: state.registerUser
  };
}

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   currentUsername: '',
    //   currentScreen: 'WhatIsYourUsernameScreen'
    // };
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
  }

  onUsernameSubmitted(username) {
    store.dispatch({ type: 'POST_REGISTER_USER', payload: username });
  }
  render() {
    if (this.props.registerUser.currentScreen === 'WhatIsYourUsernameScreen') {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }

    if (this.props.registerUser.currentScreen === 'ChatScreen') {
      return <ChatScreen currentUsername={this.props.registerUser.currentUsername} />
    }
  }
}

export default connect(mapStateToProps)(App)
