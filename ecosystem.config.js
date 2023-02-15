module.exports = {
  apps: [
    {
      name: "app-name",
      script: "./node_modules/.bin/next",
      args: "start -p " + (process.env.PORT || 8080),
      watch: false,
      autorestart: true,
    },
  ],
};