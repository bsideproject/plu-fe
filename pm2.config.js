module.exports = {
  apps: [
    {
      name: 'plu-FE',
      exec_mode: 'cluster',
      instances: 2,
      script: 'node ./app/server.js',
      env: {},
    },
  ],
};
