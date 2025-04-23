const os = require('os');

/**
 * COLYSEUS CLOUD WARNING:
 * ----------------------
 * PLEASE DO NOT UPDATE THIS FILE MANUALLY AS IT MAY CAUSE DEPLOYMENT ISSUES
 */

module.exports = {
  apps : [{
    name: "new-kangleqiu",
    script: 'build/index.js',
    time: true,
    watch: false,
    exec_interpreter: '/root/.nvm/versions/node/v16.20.0/bin/node',
    wait_ready: true,
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }],
};

