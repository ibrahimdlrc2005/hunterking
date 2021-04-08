const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Genel Komutlar')
.setTimestamp()
.addField('<a:811166737772183563:811167080396226580>   .kullanıcıbilgi', 'Kullanıcı Bilgi')
.addField('<a:811166737772183563:811167080396226580>   .yetkilerim', 'Sunucudaki Yetkinizi Görürsünüz')
.addField('<a:811166737772183563:811167080396226580>   .avatar', 'Etiketlenen Kişinin Profil Fotosunu Atar')
.addField('<a:811166737772183563:811167080396226580>   .davet','Botu Sunucunuza Eklersiniz')
.addField('<a:811166737772183563:811167080396226580>   .i','Botun İstatisliklerini Görürsünüz')
.addField('<a:811166737772183563:811167080396226580>   .afk','Afk Olursunuz')
.addField('<a:811166737772183563:811167080396226580>   .destek','Botun Hatasını Bildirmek İçin Kullanabilirsiniz')
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
  name: 'genel',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};