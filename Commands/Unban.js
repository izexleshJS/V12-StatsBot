const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`Bu Komutu Kullanabilmek İçin Üyeleri Yasakla Yetkisine Sahip Olmalısın!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setDescription(`Kullanıcı İdsi Hatalı Veya Kullanıcı Yasaklı Değil!`))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(`Başarılı Bir Şekilde Kullanıcının Banı Kaldırıldı!`))
};

exports.conf = {
    commands: ["unban","unbans"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'unban', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};