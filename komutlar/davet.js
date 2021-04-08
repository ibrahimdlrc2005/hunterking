const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const devtr = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("RANDOM")
    .addField("» **Botun Sahibi**", "<@!793589155367354388>| @✯ 𝐇𝐔𝐍𝐓𝐄𝐑𝐊İ𝐍𝐆𝐘𝐓 [𝟐𝐊]#0001  ")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl]( https://discord.gg/q3feVKFGrV)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=754040174236925952&scope=bot&permissions=40)", )
    .addField("**» Oy Linki**", " [Oy Ver](https://top.gg/bot/754040174236925952)",)
   .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(devtr);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};