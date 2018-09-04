import React, { Component } from 'react';
import { store } from "../store/store";
import { connect } from 'react-redux';
import MessageList from '../components/MessageList';
import SendMessageForm from '../components/SendMessageForm';

function mapStateToProps(state) {
  return {
    connectChatManager: state.connectChatManager
  };
}


class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage(text) {
    debugger;
    this.props.connectChatManager.currentUser.sendMessage({
      text,
      roomId: this.props.connectChatManager.currentRoom.id,
    });
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
            <h2>Who's online PLACEHOLDER</h2>
          </aside>
          <section style={styles.chatListContainer}>
            <MessageList
              messages={this.props.connectChatManager.messages}
              style={styles.chatList}
            />
            <SendMessageForm onSubmit={this.sendMessage} />
          </section>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(ChatScreen);