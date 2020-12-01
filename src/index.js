import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import NetworkInformation from './components/Networkinformation';

function App() {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="#c0392b"
        barStyle="light-content"
      />
      <Routes />
      <NetworkInformation />
    </>
  );
}

export default App;
