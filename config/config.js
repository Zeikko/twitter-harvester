var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'yeomantest'
    },
    port: 3000,
    db: 'mongodb://localhost/yeomantest-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'yeomantest'
    },
    port: 3000,
    db: 'mongodb://localhost/yeomantest-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'yeomantest'
    },
    port: 3000,
    db: 'mongodb://localhost/yeomantest-production'
  }
};

module.exports = config[env];
