const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client ();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('To buy these scripts read how-to-buy under Non-Buyer!');
  }
});
client.on('message', msg => {
	if (msg.content === '!test') {
		msg.reply('Oh Ok');
	}
});
client.login('process.env.BOT_TOKEN');
