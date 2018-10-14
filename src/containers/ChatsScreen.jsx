import React, { Component } from 'react';
import { store } from "../store/store";
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import SendMessageForm from '../components/SendMessageForm';
// import TypingIndicator from '../components/TypingIndicator';
import WhosOnlineList from '../components/WhosOnlineList';
import RoomList from '../components/Rooms';

function mapStateToProps(state) {
  return {
    connectChatManager: state.connectChatManager
  };
}


class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendTypingEvent = this.sendTypingEvent.bind(this);
  }

  sendTypingEvent() {
    this.props.connectChatManager.currentUser.isTypingIn({ roomId: this.props.connectChatManager.currentRoom.id });
  }

  sendMessage(text) {
    this.props.connectChatManager.currentUser.sendMessage({
      text,
      roomId: this.props.connectChatManager.currentRoom.id,
    });
  }

  privateMsg = (user) => {
    store.dispatch({ type: 'CREATE_CHAT_ROOM', payload: { user, currentUser: this.props.connectChatManager.currentUser } });
    console.log(user);
  }

  componentDidMount() {
    store.dispatch({ type: 'CONNECT_CHAT_MANAGER', payload: this.props.currentUsername })
  }
  render() {
    const styles = {
      container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      chatContainer: {
        display: 'flex',
        flex: 1,
      },
      whosOnlineListContainer: {
        width: '300px',
        flex: 'none',
        padding: 20,
        backgroundColor: '#2c303b',
        color: 'white',
      },
      availableRooms: {
        width: '300px',
        flex: 'none',
        padding: 20,
        backgroundColor: '#2c303b',
        color: 'white',
      },
      chatListContainer: {
        padding: 20,
        width: '85%',
        display: 'flex',
        flexDirection: 'column',
      },
    }

    return (
      <div style={styles.container}>
        <div style={styles.chatContainer}>
          <aside style={styles.whosOnlineListContainer}>
            <WhosOnlineList
              currentUser={this.props.connectChatManager.currentUser}
              users={this.props.connectChatManager.currentRoom.users}
              onClick={this.privateMsg}
            />
          </aside>

          <section style={styles.chatListContainer}>
            <MessageList
              messages={this.props.connectChatManager.messages}
              style={styles.chatList}
            />
            {/* <TypingIndicator usersWhoAreTyping={this.props.connectChatManager.usersWhoAreTyping} /> */}
            <SendMessageForm onSubmit={this.sendMessage} onChange={this.sendTypingEvent} />
          </section>
          <aside style={styles.availableRooms}>
            <RoomList rooms={this.props.connectChatManager.chatRooms} />
          </aside>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ChatScreen);