const net = require('net');
const {IP, PORT} = require('./constants')

const connect = function() {
  const conn = net.createConnection( 
    {
      host: IP,
      port: PORT
    }
  );

  conn.setEncoding('utf8');

  conn.on('data', function(data) {
    console.log(data.toString());
  });

  conn.on('connect', () => {
    console.log(`Successfully connected to game server.`);
    conn.write('Name: IS!');
    conn.write('Move: Up')  
  });

  return conn;
};

module.exports = {
  connect
};