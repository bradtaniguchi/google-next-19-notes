const liveServer = require('live-server');

liveServer.start({
  port: 8080,
  root: 'build',
  open: false
});
