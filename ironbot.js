const dotenv = require('dotenv');
dotenv.config();

const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log('I am ready!');

  client.user.setPresence({
  activity: { type: 'PLAYING', name: 'Coded by Demirhan Demir' },   
   });
});

client.on('message', message => {

  if (message.content === '!rip') {
    
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');

    message.channel.send(attachment);
  }
  if (message.content === '!spot') {
      const attachment = new MessageAttachment('https://cjasn.asnjournals.org/content/clinjasn/12/12/2032/F7.large.jpg');
  
    message.channel.send(attachment);
  }
  if (message.content === '!spot') {
    const attachment = new MessageAttachment('https://i.pinimg.com/originals/58/47/a3/5847a3b2c028e768579d17deb7c166de.png');

  message.channel.send(attachment);
  }
  
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.DISCORDTOKEN);