const app = require('../app');
const debug = require('debug')('school-backend:server');
const http = require('http');
const mongoose = require('mongoose');

const port = normalizePort(process.env.PORT || '3100');
const URI_MONGO = 'mongodb+srv://webui100:webui100@schoolproject-tloch.azure.mongodb.net/school_db?retryWrites=true&w=majority'
app.set('port', port);


const server = http.createServer(app);


const connectDb = () => {
  mongoose.Promise = require('bluebird');

  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
  mongoose.connect(URI_MONGO, options);
  console.log(`Data base connected success`)
  return mongoose.connection
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

const onError =(error) =>{
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log(`App started on server ${port}`)
}

server.listen(port)
  .on('error', onError)
  .on('listening', connectDb)
  .on('listening', onListening)
