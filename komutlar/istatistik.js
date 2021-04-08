const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setFooter("Hunter Bot İstatistikleri", bot.user.avatarURL())
    .addField(
      "» **Ram Kullanım**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField("» **Çalışma Zamanı**", seksizaman)
    .addField(
      "» **Kullanıcı**",
      bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )
    .addField("» **Sunucu**", bot.guilds.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS **", "v" + Discord.version, true)
    .addField("» **Node.JS **", `${process.version}`, true)
    .addField("» **Ping**", bot.ws.ping + " ms", true)
    .addField(
      "» **CPU**",
      `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .addField('» Yapımcı', '<@793589155367354388> | ✯ 𝐇𝐔𝐍𝐓𝐄𝐑𝐊İ𝐍𝐆𝐘𝐓 [𝟐𝐊]#0001 ')
        .addField("» **Linkler**", "[Davet](https://discord.com/oauth2/authorize?client_id=754040174236925952&scope=bot&permissions=40)\n[Destek Sunucusu]( https://discord.gg/q3feVKFGrV)\n[Oy Ver](https://top.gg/bot/754040174236925952)") 
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["statistics", "YEDEK KOMUT2", "i",'istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};