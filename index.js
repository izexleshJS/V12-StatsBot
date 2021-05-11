const Discord = require("discord.js");
const fs = require("fs");
const Settings = global.Settings = require("./Settings/Settings.json");

let _client = new Discord.Client();
if (Settings.Private_Server === true) {
    _client = new Discord.Client({
        fetchAllMembers: true
    });
}
const client = global.client = _client;

const Commands = global.Commands = new Map();
console.log("--------------------------------");
console.log("Komutlar Yükleniyor...");
fs.readdirSync("./Commands", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./Commands/${file}`);
    if (prop.conf.commands == undefined || prop.run == undefined) return console.error(`[COMMAND] ${file} Yüklenemedi !.`);
    if (prop.conf.commands && prop.conf.commands.length > 0) {
        prop.conf.commands.forEach(aliase => Commands.set(aliase, prop));
    }
    if (prop.onLoad != undefined && typeof (prop.onLoad) == "function") prop.onLoad(client);
    console.log(`[COMMAND] ${prop.help.name} Komutu Başarıyla Yüklendi ! ${file}.`);
});

console.log("--------------------------------");
console.log("Events Yükleniyor...");
fs.readdirSync("./Events", { encoding: "utf-8" }).filter(file => file.endsWith(".js")).forEach(file => {
    let prop = require(`./Events/${file}`);
    client.on(prop.conf.event, prop.execute);
    console.log(`[EVENT] ${file} Başarıyla Yüklendi !`);
});

console.log("--------------------------------");
console.log("| Bot Hazırlık Süreci Tamamlandı Bot Başlatılıyor... |");

require("./bot.js");

