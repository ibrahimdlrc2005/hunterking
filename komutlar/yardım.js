const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:811166737772183563:811167080396226580> Yardım Komutları')
.setTimestamp()
.addField('<a:811166737772183563:811167080396226580>   .moderasyon', 'Moderasyon Komutları')
.addField('<a:811166737772183563:811167080396226580>   .müzik', 'Müzik Komutları')
.addField('<a:811166737772183563:811167080396226580>   .eğlence', 'Eğlence Komutları')
.addField('<a:811166737772183563:811167080396226580>   .aboneyardım', 'Abone Rol Komutları')
.addField('<a:811166737772183563:811167080396226580>   .genel', 'Genel Komutlar')
.addField('<a:811166737772183563:811167080396226580>   .davet','Botu Sunucunuza Eklersiniz')
     .addField("» **Linkler**", "[Davet](https://discord.com/oauth2/authorize?client_id=754040174236925952&scope=bot&permissions=40)\n[Destek Sunucusu]( https://discord.gg/q3feVKFGrV)\n[Oy Ver](https://top.gg/bot/754040174236925952)") 
.setImage("https://cdn.discordapp.com/attachments/813453062743654430/813651304081129493/standard_3.gif")
.setFooter('Hunter', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};