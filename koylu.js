const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Helal Berkay ${client.user.tag}!`);
}); 
 
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

});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('-kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('-ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);


client.login(process.env.BOT_TOKEN);
