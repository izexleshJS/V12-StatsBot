const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`Otorol mesajı zaten ayarlanmamış.`)
 
 
  message.channel.send(`Otorol mesajı başarıyla sıfırlandı.`)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.conf = {
    commands: ["otorolmesajsıfırla","otorol-mesaj-sıfırla"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'otorolmesajsıfırla', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};