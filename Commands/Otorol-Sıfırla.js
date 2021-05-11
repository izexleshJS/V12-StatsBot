  
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`Otorol sistemi zaten kapalı.`)
 
 
  message.channel.send(`Otorol sistemi başarıyla sıfırlandı.`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  

  };
exports.conf = {
    commands: ["otorolsıfırla","otorol-sıfırla"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'otorolsıfırla', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};