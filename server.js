// Import the discord.js module
const Discord = require("discord.js");
// Create an instance of a Discord client
const client = new Discord.Client();
// The token of your bot - https://discordapp.com/developers/applications/me

const prefix = ">";
client.on("message", message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  let isBotOwner = message.author.id == "212589934966472704";
  const command = args.shift().toLowerCase();
  if (message.author.bot === false)
  if (message.content.startsWith(">"))
    switch (command) {
      case "meme":
        let arg = args.join("_").split(";_");
        message.channel.send(
          "http://urlme.me/" + arg[0] + "/" + arg[1] + "/" + arg[2] + ".jpg"
        );
        break;
      case "blah":
        message.channel.send("Meh.");
        break;
      case "send":
        message.channel.send("aa");
        break;
      case "echo":
        if (message.author.id === "212589934966472704")
          message.delete();
          message.channel.send(args.join(" "));
          break;
      case "cow":
        message.channel.send("https://images-ext-2.discordapp.net/external/hsIDltJuzqqUl4B1Gpu477rh-lhqCjw4jjwsUuMZkE4/https/media.discordapp.net/attachments/514197911022600194/721890586214268948/image0.gif?width=425&height=429");
        break;
    }
});
client.login(process.env.SECRET);
