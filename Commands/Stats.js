const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');
exports.run = async(client, message, args) => {

require('moment-duration-format');
var os = require('os')
let iş = os.cpus()[0]

return message.channel.send(new Discord.MessageEmbed()
.setColor("#00ffd0")
.setTimestamp()
.setAuthor(client.user.username+' | Stats', client.user.avatarURL())
.addField('❯ Latency', client.ws.ping+'ms.', true)
.addField('❯ Uptime', moment.duration(client.uptime).format(`w [weeks] d [days] h [hours] m [minutes] s [seconds]`), true)
.addField('❯ Users' ,client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField("❯ Server", client.guilds.cache.size.toLocaleString(), true)
.addField("❯ Channels", client.channels.cache.size.toLocaleString(), true)
.addField("❯ Discord.JS Version", "v"+Discord.version, true)
.addField("❯ NodeJS Version", `${process.version}`, true)
.addField('❯ CPU Usage', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+' MB', true));

};

exports.conf = {
    commands: ["istatistik","stats","i"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'stats', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]',
    category: 'Guild'
};