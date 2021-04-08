const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Hunter Bot Müzik Komutları')
.setTimestamp()
.addField('<a:spotify:772496382351245312>   .çal', 'Müzik çalar ')
.addField('<a:spotify:772496382351245312>   .devam', 'Devam Ettirir ')
.addField('<a:spotify:772496382351245312>   .durdur', 'Müziği Duraklatır ')
.addField('<a:spotify:772496382351245312>   .bitir', ' Müziği Sonlandırır')
.addField('<a:spotify:772496382351245312>   .geç', 'Müziği Geçer ')
.addField('<a:spotify:772496382351245312>   .ses', 'Ses Seviyesini Ayarlar ')
.addField('<a:spotify:772496382351245312>   .kuyruk', 'Kuyruğu Gösterir ')
.addField('<a:spotify:772496382351245312>   .tekrarla', 'Müziği Tekrarlar ')
.addField('<a:emoji_16:768686831063531530>  Botu Direk Sesten Atmayın Bir Daha Sese Girmeyebiliyo   ')
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
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
