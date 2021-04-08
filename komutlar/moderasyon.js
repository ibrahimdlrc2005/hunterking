const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Hunter Bot Moderasyon Komutları')
.setTimestamp()
.addField('<a:811166737772183563:811167080396226580>   .ban', 'Ban atarsınız')
.addField('<a:811166737772183563:811167080396226580>   .unban', 'Banını Açarsınız')
.addField('<a:811166737772183563:811167080396226580>   .banlog','Ban Log Ayarlar')
.addField('<a:811166737772183563:811167080396226580>   .byetkilirol', 'Ban yetkilirol ayarlar')
.addField('<a:811166737772183563:811167080396226580>   .sil', 'Mesaj Siler')
.addField('<a:811166737772183563:811167080396226580>   .rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField('<a:811166737772183563:811167080396226580>   .everhereengel', 'Ever Here Engel ayarlar')
.addField('<a:811166737772183563:811167080396226580>   .capsengel', 'Capsengel ayarlar')
.addField('<a:811166737772183563:811167080396226580>   .kick', 'Kick Atarsınız') 
.addField('<a:811166737772183563:811167080396226580>   .yavaşmod', 'Yavaş Mod Ayarlar')
.addField('<a:811166737772183563:811167080396226580>   .sa-as aç', 'SA AS Açar')
.addField('<a:811166737772183563:811167080396226580>   .sa-as kapat', 'SA AS Kapatır')
.addField('<a:811166737772183563:811167080396226580>   .kicklog', 'Kick Logunu Ayarlarsınız')
.addField('<a:811166737772183563:811167080396226580>   .kanal-koruma', 'Kanalları Korur')
.addField('<a:811166737772183563:811167080396226580>   .kilitle', 'Kullanılan Kanalı Kilitler')
.addField('<a:811166737772183563:811167080396226580>   .küfürengel', 'Küfürleri Engeller')
.addField('<a:811166737772183563:811167080396226580>   .linkengel', 'Reklamları Engeller')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};