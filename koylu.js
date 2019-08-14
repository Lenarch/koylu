const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');
const ayarlar = require ('./ayarlars.json');

client.on('ready', () => {
 console.log(`HELAL ${client.user.tag}!`)

}); 
 
 client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Selam ping değerim' +client.ping+ 'ms. Fazlaysa kusura bakma');
  } 

  if (msg.content === 'selam') {
    msg.channel.send('Selam!!');
  } 

  if (msg.content === 'pp') {
    msg.channel.send(msg.author.avatarURL);
  }
  
  if (msg.content === 'anatomye selam ver') {
    msg.channel.send('Selam Anatomy Ailesi.');
  }

  if (msg.content === 'günaydın') {
   msg.channel.send('Günaydın kavdeşim');
  }
  if (msg.content === 'iyi geceler') {
   msg.reply('İyi Geceler');
  }
  
  if (msg.content === '222Kürt vuruşu') {
   msg.reply('https://gelecegiyazanlar.turkcell.com.tr/konu/web-programlama/egitim/401-node.js/node.js-icinde-modul-tanimlama-ve-kullanma');
  }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('•kick')) {
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

  if (message.content.startsWith('!ban') && (message.author.id === ayarlar.sahip)) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(` ${user.tag}`);
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
    if (message.content === 'rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});

client.login(process.env.BOT_TOKEN);
