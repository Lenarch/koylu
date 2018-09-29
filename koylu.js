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

  if (msg.content === 'selam') {
    msg.channel.send('Selam.');
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
client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {// Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});


client.login(process.env.BOT_TOKEN);
