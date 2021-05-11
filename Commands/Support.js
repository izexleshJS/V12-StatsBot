const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

  const yardım = new Discord.MessageEmbed()
    .setColor("00ffd0")
    .addField(
      "Yetenekli ve arkadaş canlısı desteğimizi burada bulabilirsiniz: ",
      `https://discord.gg/VDRvNckhPf`
    )
  return message.channel.send(yardım);
  
    };

exports.conf = {
    commands: ["destek","support"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'support', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};