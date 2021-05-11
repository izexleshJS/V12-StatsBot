
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "c?";
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('Otorol mesajı için 5 değişken desteklenmektedir. Bunlar -uyetag- -uye- -uyesayisi- -rol- ve -server- dir.\nÖrnek: `.otorol-mesaj-ayarla -uye- hoş geldin! Senle beraber -uyesayisi- kişiyiz!`')
  
 message.channel.send('Otorol mesajı başarıyla `'+mesaj+'` olarak ayarlandı!') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.conf = {
    commands: ["otorolmesajayarla","otorol-mesaj-ayarla"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'otorolmesajayarla', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};