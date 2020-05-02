import React, { useState } from 'react';
import ServerButtonHooks from './components/ServerButtonHooks'

var socket = require('socket.io-client')('http://localhost:4000');

function App() {

  const [displayData,setDisplayData]=useState(``)

  return (
    
    <React.Fragment>      
      
      <ServerButtonHooks 
      name={`Server Button V2`} 
      socket={socket} 
      event={`hello world`}
      
      data={`say hi`}
      responding={data=>setDisplayData(data)}
      />

      {displayData}

    </React.Fragment>
  );
}

export default App;
