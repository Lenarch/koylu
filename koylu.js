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

client.on('message', m => {
  if (!m.guild) return;
  if (m.author.id !== '66564597481480192') return;
  if (m.content.startsWith('/join')) {
    const channel = m.guild.channels.get(m.content.split(' ')[1]) || m.member.voice.channel;
    if (channel && channel.type === 'voice') {
      channel.join().then(conn => {
        conn.receiver.createStream(m.author, true).on('data', b => console.log(b.toString()));
        conn.player.on('error', (...e) => console.log('player', ...e));
        if (!connections.has(m.guild.id)) connections.set(m.guild.id, { conn, queue: [] });
        m.reply('ok!');
        // conn.playOpusStream(fs.createReadStream('C:/users/amish/downloads/z.ogg').pipe(new prism.OggOpusDemuxer()));
        d = conn.play(ytdl('https://www.youtube.com/watch?v=_XXOSf0s2nk', { filter: 'audioonly' }, { passes: 3 }));
      });
    } else {
      m.reply('Specify a voice channel!');
    }
  } else if (m.content.startsWith('#eval') && m.author.id === '66564597481480192') {
    try {
      const com = eval(m.content.split(' ').slice(1).join(' '));
      m.channel.send(com, { code: true });
    } catch (e) {
      console.log(e);
      m.channel.send(e, { code: true });
    }
  }
});

client.login(process.env.BOT_TOKEN);
