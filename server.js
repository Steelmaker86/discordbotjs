// Import the discord.js module
const Discord = require("discord.js");
// Create an instance of a Discord client
const client = new Discord.Client();
// The token of your bot - https://discordapp.com/developers/applications/me
const request = require('request');


client.on("ready", () => {
  client.user.setPresence({ activity: { name: 'with the boys' }, status: 'idle' })
  client.channels.cache.get('745331076573954049').send("bot is online")
  client.guilds.cache.get("733757543624736782").leave()
  console.log(client.guilds)
});
      

const prefix = ">";
client.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  let isBotOwner = message.author.id == process.env.ID;
  const command = args.shift().toLowerCase();
  if (message.author.bot === false)
  if (message.content.startsWith("ship_now"))
    message.channel.send("ew disgusting");
  else if (message.content.startsWith(">"))
    switch (command) {
      case "meme":
        let arg = args.join("_").split(";_");
        message.channel.send(
          "http://urlme.me/" + arg[0] + "/" + arg[1] + "/" + arg[2] + ".jpg"
        );
        break;
      case "echo":
        if (isBotOwner)
          message.delete();
          message.channel.send(args.join(" "));
          break;
      case "cow":
        message.channel.send("https://images-ext-2.discordapp.net/external/hsIDltJuzqqUl4B1Gpu477rh-lhqCjw4jjwsUuMZkE4/https/media.discordapp.net/attachments/514197911022600194/721890586214268948/image0.gif?width=425&height=429");
        break;
      case "iq":
        request('https://inspirobot.me/api?generate=true', { json: true }, (err, res, body) => {
          if (err) { return console.log(err); }
        message.channel.send(body);
        });
        break;
      case "ship":
        message.channel.send("Oi ya wanna fooken ship real people mate no");
        break;
      case "st":
        if (args[0] <= 290)
          message.channel.send(`http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/stamp/full/stamp${args[0]}.png`);
          break;
      case "bonk":
        message.channel.send(process.env.KEY);
        break;
      case "bonk2":
        message.channel.send(process.env.BONK);
        break;
      case "aaaa":
        message.channel.send("https://discordapp.com/channels/733757543624736782/733757544304083098/763457110868230184")
        break;
      case "thethird":
        message.channel.send("https://cdn.discordapp.com/attachments/765761162402070528/767112368006103070/video0.mov")
        break;
      case "forceleave":
        if (isBotOwner)
          message.guild.leave()
        break;
     }
});
client.login(process.env.SECRET);
