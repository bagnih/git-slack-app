import React from 'react';

const Rooms = (props) => {
  const roomList = (rooms) => {
    return rooms.map((room, index) => <RoomListItem key={index}>{room.name}</RoomListItem>);
  }

  if (props.rooms) {
    return (
      <ul>
        {roomList(props.rooms)}
      </ul>
    );
  } else {
    return <p>Loading...</p>
  }

};

const RoomListItem = (props) => {
  const styles = {
    li: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 2,
      paddingBottom: 2,
    },
    div: {
      borderRadius: '50%',
      width: 11,
      height: 11,
      marginRight: 10,
    },
  };

  return (
    <li style={styles.li}>
      <div
        style={{
          ...styles.div,
        }}
      />
      {props.children}
    </li>
  )
};

export default Rooms;