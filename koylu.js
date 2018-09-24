const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')

client.on('ready', () => {
  console.log(`Helal Berkay ${client.user.tag}!`);
}); 

var prefix='-' 
 client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Selam ping değerim' +client.ping+ 'ms. Fazlaysa kusura bakma');
  } 

  if (msg.content === 'pp') {
    msg.channel.send(msg.author.avatarURL);
  }

  if (msg.content === 'anatomye selam ver') {
    msg.channel.send('Selam Anatomy Ailesi.');
  }

  if (msg.content==='selam') {
    msg.chennel.send('Selam.');
  }

});
 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'deneme');
  if (!channel) return;
  channel.send(`Anatomy Sunucusuna Hoş Geldin,${member}`);
});  

client.login(process.env.BOT_TOKEN);
