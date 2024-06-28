module.exports = {
    apps: [
      {
        name: "spotify-downloader-bot",
        script: "./bot.js",
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
      },
    ],
  };