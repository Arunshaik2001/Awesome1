import Peer, { DataConnection } from 'peerjs';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const App = () => {
  const peer = new Peer({
    port: 443,
    path: '/',
  });

  const [peerId, setPeerId] = useState('');
  const [peerConnection, setPeerConnection] = useState<DataConnection | null>(null);

  useEffect(() => {
    // Listen for incoming connections
    peer.on('connection', (connection) => {
      console.log('Received connection');
      setPeerConnection(connection);

      connection.on('data', (data) => {
        console.log('Received data:', data);
      });

      connection.on('close', () => {
        console.log('Connection closed');
        setPeerConnection(null);
      });
    });
  }, []);

  const connectToPeer = () => {
    const connection = peer.connect(peerId);

    connection.on('open', () => {
      console.log('Connection established');
      setPeerConnection(connection);
    });

    connection.on('data', (data) => {
      console.log('Received data:', data);
    });

    connection.on('close', () => {
      console.log('Connection closed');
      setPeerConnection(null);
    });
  };

  const sendData = () => {
    if (peerConnection) {
      peerConnection.send('Hello from PeerJS!');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>PeerJS Demo</Text>

      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        placeholder="Enter peer ID"
        onChangeText={(text) => setPeerId(text)}
        value={peerId}
      />

      <Button title="Connect" onPress={connectToPeer} />

      {peerConnection && (
        <>
          <Text style={{ marginTop: 20 }}>Connected to peer {peerId}</Text>

          <Button title="Send data" onPress={sendData} />
        </>
      )}
    </View>
  );
};

export default App;