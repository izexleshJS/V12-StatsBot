const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  return message.channel.send('🏓 Pong! `'+client.ws.ping+'` ms.');

};

exports.conf = {
    commands: ["ping","ms"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'ping', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};