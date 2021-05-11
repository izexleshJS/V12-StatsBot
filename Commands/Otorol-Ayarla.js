const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const crypto = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || crypto.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`Bir rol etiketlemelisin.\nÖrnek kullanım: ${prefix}otorol-ayarla @rol #kanal`)
 
 if(!kanal) return message.channel.send(`Bir kanal etiketlemelisin.\nÖrnek kullanım: ${prefix}otorol-ayarla @rol #kanal`)
 
  message.channel.send(`Otorol başarıyla aktif edildi. Otorol rolü **${rol}** olarak ayarlandı. Otorol kanalı **${kanal}** olarak ayarlandı.`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 

      };

exports.conf = {
    commands: ["otorolayarla","otorol-ayarla"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'otorolayarla', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};