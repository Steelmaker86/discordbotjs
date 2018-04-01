


// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of 
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client(); 
const hook = new Discord.WebhookClient("426893085356720129", process.env.TOKEN);
// The token of your bot - https://discordapp.com/developers/applications/me
const prefix = '/'
const music = new Music(client, {
  ownerOverMember: true,
  botOwner: '212589934966472704',
  prefix: '/',
  youtubeKey: process.env.KEY,
  botAdmins: ['212589934966472704', '319139711836880896'],
  enableQueueStat: true
});



client.login(process.env.SECRET);
