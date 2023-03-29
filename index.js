const { App } = require('@slack/bolt');

// Initializes your app with your bot token and app token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
});

// Listens for messages containing "hello"
app.message('hello', async ({ message, say }) => {
  // Sends a reply to the user who posted the incoming message
  await say(`Hello, <@${message.user}>!`);
});

// Starts your app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running!');
})();
