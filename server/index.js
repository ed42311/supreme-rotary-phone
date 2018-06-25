const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
require('./model').connect(config.dbUri);

const PORT = process.env.PORT || 5000;

if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());

  const localSignupStrategy = require('./passport/local-signup');
  const localLoginStrategy = require('./passport/local-login');
  passport.use('local-signup', localSignupStrategy);
  passport.use('local-login', localLoginStrategy);

  const authCheckMiddleware = require('./middleware/auth-check');
  app.use('/api', authCheckMiddleware);

  const authRoutes = require('./routes/auth');
  const apiRoutes = require('./routes/api');
  app.use('/auth', authRoutes);
  app.use('/api', apiRoutes);

  app.set('port', (process.env.PORT || 5000));

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });


}
