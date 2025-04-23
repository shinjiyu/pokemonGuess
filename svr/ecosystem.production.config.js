const os = require('os');

/**
 * COLYSEUS CLOUD WARNING:
 * ----------------------
 * PLEASE DO NOT UPDATE THIS FILE MANUALLY AS IT MAY CAUSE DEPLOYMENT ISSUES
 */

module.exports = {
  apps : [{
    name: "kangleqiu-v2",
    script: 'build/index.js',
    time: true,
    watch: false,
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    }
  }],
};

