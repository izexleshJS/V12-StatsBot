const Discord = require("discord.js")
exports.run = async(client, message, args) => {

    const embedyardim = new Discord.MessageEmbed()
    .setColor('#00ffd0')
    .setAuthor(`${client.user.username} `, client.user.avatarURL()) 
      .setDescription('Detaylı yardım almak için **.yardım**\n Örnek komut kullanımı: **.sunucu-panel**.\n Botumuzu davet etmek için **.davet** ')
      .addField('** ❯ Stats Komutları (2)**', `Herkesin kullanabileceği stats komutları. \n` +  '`me`, `top`')
      .addField('** ❯ Otorol Komutları (4)**', `Herkesin kullanabileceği otorol komutları. \n` +  '`otorol-ayarla`, `otorol-sıfırla`,\n `otorol-mesaj-ayarla`, `otorol-mesaj-sıfırla` ')
      .addField('** ❯ Yetkili Komutlar (5)**',   `Yetkililerin kullanabileceği komutlar \n` + '`resetstats`, `ban`, `unban`, `kick`, `sunucu-panel`')
      .addField('** ❯ Diğer Commands (4)**',`Herkesin kullanabileceği ortak komutlar. \n` +  '`istatistik`, `ping`, `davet`, `destek`')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL())
    .setImage("https://repository-images.githubusercontent.com/334362959/6727a500-6335-11eb-802d-9168ebc4b465")
    .setTimestamp()
    message.channel.send(embedyardim).catch()

    };

exports.conf = {
    commands: ["yardım","help"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'help', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};