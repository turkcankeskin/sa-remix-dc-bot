const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  const channel = client.channels.cache.get("ROOM-ID");
  if (!channel) return console.error("The channel does not exist!");
  channel.join().then(connection => {
      console.log("Successfully connected.");
  }).catch(e => {
      console.error(e);
  });
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('voiceStateUpdate', async (oldState, newState) => {
  if (oldState.channel !== newState.channel) {
    if (newState.channel && newState.channel.name === 'ROOM-NAME') {
      play(newState.channel, './sounds/sa-remix.wav');
    }
  }
})

client.login('BOT-TOKEN');

async function play(channel, file)
{
  const connection = await channel.join();

  connection.play(file);
}
