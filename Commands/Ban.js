const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("``Bu Komutu Kullanabilmek İçin Üyeleri Yasakla Yetkisine Sahip Olmalısın!``")
      .setColor("#00ffd0");
 
    message.channel.send(embed);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen Banlanacak Kişiyi Etiketleyiniz!")
        .setColor("#00ffd0")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 
  const embed = new Discord.MessageEmbed()
    .setColor("#00ffd0")
    .setDescription(`${u} Adlı Şahsın Sunucudan Banlanmasını Onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem İptal Oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem Onaylandı! ${u} Adlı Şahıs Sunucudan Banlandı!`
        );
 
        message.guild.member(u).ban();
      }
    });
  });
    };

exports.conf = {
    commands: ["ban","bans"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'ban', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};
//izexlesh