
let connection;

const setupInput = function(conn) {

  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};



const handleUserInput = process.stdin.on('data', key => {

  if (key === '\u0003') { // maps ctrl + c input
    process.exit();
  };

  switch (key) {
    case 'ArrowUp':
      connection.write('Move: up');
      break
    case 'ArrowDown':
      connection.write('Move: down');
      break
    case 'ArrowLeft':
      connection.write('Move: left');
      break
    case 'ArrowRight':
      connection.write('Move: right');
      break
    case '1':
      connection.write('Say: Help!');
      break
    case '2':
      connection.write('Say: Hi');
    case '3':
      connection.write('Say: GOTCHA!')
  }
});

module.exports = setupInput;
 