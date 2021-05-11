const http = require('http');
const express = require('express');
const db = require('quick.db')
const Discord = require("discord.js")
const client = global.client;

const app = express();
app.get("/", (request, response) => {
  console.log('#izexlesh Başarıyla Botunuz 7/24 Aktif Tutulmaya Başladı!');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", () => {
    console.log("Bot Artık Aktif... ! #izexlesh");
});

client.on("ready", async function() {
const voiceChannel = "841818572724633600"
client.channels.cache.get(voiceChannel).join()
.catch(err => {
throw err;
})
})

//Botu ekleyince dmden mesaj
client.on("guildCreate", guild => {
 
  const osbir = new Discord.MessageEmbed()
    .setTitle(`🎉 StatbotTR'ye hoş geldiniz!`)
    .setTimestamp()
    .setColor("#00ffd0")
    .setDescription(`**General Info**
• Varsayılan prefixim (.) Hızlı komut listesi için .help yazın.
• Mesajların ve sesin takibi, botu davet ettiğiniz andan itibaren hemen başlar. Verilerin istatistiklerinizde gösterilmesi birkaç dakika sürer.

**StatbotTR - Kanal Sayaçları**
StatbotTR, ücretsiz özel adlara sahip süper özelleştirilebilir kanal sayaçlarıdır! Hızlı bir şekilde başlamak için .sunucupanel kur kullanabilirsiniz!,

**StatbotTR - Otorol Komutları**
StatbotTR, içinde barındırdığı otorol sistemi ile sunucunuza katılan kişilere belirlediğiniz rolü vermeyi sağlar kullanmak için {.otorol @Rol #OtorolLog} olarak yapabilirsiniz detaylı bilgiler için .yardım!
`);
  guild.owner.send(osbir);
})
//Botu ekleyince dmden mesaj

//// otorol sistemi
client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;
const benwestranasilsinizefenimmmmasdasd = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setFooter(`StatbotTR`)
.setDescription( "**" +
          member.user.username +
          "** Hoş geldin! Otomatik rolün verildi. Seninle beraber **" +
          member.guild.memberCount +
          " **kişiyiz!")
  if (!mesaj) {
    client.channels.cache
      .get(kanal)
      .send(benwestranasilsinizefenimmmmasdasd);
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj
      .replace("-uye-", `${member.user}`)
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.cache.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
  }
});
//otorol sistem 

client.cooldown = new Discord.Collection();
client.config = {
cooldown: 1 * 1000
}
client.db = require("quick.db");
client.on("message", async (message) => {
    if (!message.guild || message.author.bot) return;

});
//otorol sistem

client.login(process.env.token);
