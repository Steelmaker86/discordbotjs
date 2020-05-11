


// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of 
const client = new Discord.Client(); 
// The token of your bot - https://discordapp.com/developers/applications/me
const prefix = '/'


client.on('message', message => {
  if (message.author.bot) return;
  var str = message.content.indexOf(" ")
  var command = message.content.split(" ")[0]
  var par = message.content.substring(str)
client.login(process.env.SECRET);
