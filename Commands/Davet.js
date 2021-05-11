const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

  const yardım = new Discord.MessageEmbed()
    .setColor("#00ffd0")
    .setAuthor(`StatsBotTR Davet`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField(
      "Bot Davet Link",
      `Botumuzu Sunucuya Ekle! [Tıkla](https://discord.com/oauth2/authorize?client_id=823509396889141259&scope=bot&permissions=805314622)`
    )
    .setFooter(`StatsBotTR Davet Menüsü`, client.user.avatarURL());
  return message.channel.send(yardım);
  
    };

exports.conf = {
    commands: ["davet","invite"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'davet', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};
//izexlesh