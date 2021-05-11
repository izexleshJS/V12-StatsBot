const Discord = require("discord.js");
const Database = require("../Helpers/Database");
const vt = new Database("Database", "Voice");
const mdb = new Database("Database", "Message");
// exports.onLoad = (client) => {};
/**
 * 
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    if(!message.member.permissions.has("ADMINISTRATOR") && !message.member.permissions.has("MANAGE_GUILD")) return message.reply("you are not permission to do this.");
    let deleteMessages = [];

    let msg = await message.reply("Neyi Sıfırlıcaksın `(herşey, ses ve mesaj)` Lütfen Birini Yaz");
    deleteMessages.push(msg);

    let reply = await message.channel.awaitMessages((m) => m.author.id == message.author.id, {
        time: 15000,
        max: 1
    }).then(messages => messages.first()).catch(err => undefined);
    if(!reply){
        message.reply("15 Saniyen Doldu Lütfen Komutu Tekrar Yazın.")
        return delete_Messages(deleteMessages);
    }
    deleteMessages.push(reply);

    if(!["herşey", "ses", "mesaj"].some(type => reply.content.toLowerCase() == type)) return delete_Messages(deleteMessages);

    switch (reply.content) {
        case "herşey":
            vt.set(`stats.${message.guild.id}`, {});
            mdb.set(`stats.${message.guild.id}`, {});
            break;
        case "ses":
            vt.set(`stats.${message.guild.id}`, {});
            break;
        case "mesaj":
                mdb.set(`stats.${message.guild.id}`, {});
                break;
        default:
            vt.set(`stats.${message.guild.id}`, {});
            mdb.set(`stats.${message.guild.id}`, {});
            break;
    }
    delete_Messages(deleteMessages);
    message.reply(`\`${reply.content}\` Bilgilerin Başarıyla Sıfırlandı.`).then(m => m.delete({timeout: 5000}));
};

exports.conf = {
    commands: ["reset", "resetstat", "resetstats"],
    enabled: true,
    guildOnly: true
};

exports.help = { 
    name: 'sıfırla', 
    description: 'Sunucudaki aktifliğiniz hakkında bilgi verir.',
    usage: 'reset',
    kategori: 'kullanıcı'
};

function delete_Messages(messages) {
    messages.forEach(message => {
        if(message.deletable && !message.deleted) message.delete().catch();
    });
}
