const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:811166737772183563:811167080396226580> Eğlence Komutları')
.setTimestamp()
.addField('<a:811166737772183563:811167080396226580>  .oylama', 'Oylama Yaparsınız')
.addField('<a:811166737772183563:811167080396226580>  .espri', 'Espri Yaparsınız')
.addField('<a:811166737772183563:811167080396226580>  .adamasmaca', 'Adam Asmaca oynarsınız')
.addField('<a:811166737772183563:811167080396226580>  .kralol', 'Kral Olursunuz')
.addField('<a:811166737772183563:811167080396226580>  .golat', 'Gol Atarsınız')
.addField('<a:811166737772183563:811167080396226580>  .kapaklaflar', 'Kapak Laf Atar')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};