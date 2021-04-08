const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('**Hunter Abone Yardım Menüsü**',`
<a:811166737772183563:811167080396226580>  **.abonerol** <a:811166737772183563:811167080396226580> 
Abone Rolünü ayarlarsınız

<a:811166737772183563:811167080396226580>  **.abonelog** <a:811166737772183563:811167080396226580> 
Abone Log'u ayarlarsınız

<a:811166737772183563:811167080396226580>  **.abone-y-rol** <a:811166737772183563:811167080396226580> 
Abone Yetkili Rolü Ayarlarsınız

<a:811166737772183563:811167080396226580>  **.abone** <a:811166737772183563:811167080396226580> 
Abone rolü verirsiniz`)
     .addField("» **Linkler**", "[Davet](https://discord.com/oauth2/authorize?client_id=754040174236925952&scope=bot&permissions=40)\n[Destek Sunucusu]( https://discord.gg/q3feVKFGrV)\n[Oy Ver](https://top.gg/bot/754040174236925952)") 
.setImage("https://cdn.discordapp.com/attachments/813453062743654430/813651304081129493/standard_3.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-yardım"],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'aboneyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};