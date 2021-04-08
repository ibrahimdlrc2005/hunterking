const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  const codare = args.slice(0).join(' ');
  if (codare.length < 1) return message.channel.send('`Talep Açma Sebebinizi Belirtiniz.`')
    message.channel.send('`Destek Talebi Başarıyla Gönderildi,Yetkililerin Size Ulaşmasını BekLeyiniz.`');


    var Hook = new Discord.WebhookClient("811576504312004608", "yzi5Ai1BxMYh85-_-rse624blVRhUNWaApNUyrB3L86Z79HcKV5Yoc4NcuwgrKCYMFqa")

    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL())
    .setTitle(`Destek Talebi!`)
    .setDescription(`
      **Talep Eden: **`+message.author.tag+`
      **Talep Sebebi: **\``+codare+`\`
      `)
    .setFooter(`Hunter Destek`)
    .setTimestamp()
    Hook.send(embed)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['destek'],
    permLevel: 0,  
  };
  
  exports.help = {
    name: 'destek-al',
    description: 'Talebinizi belirterek destek alabilirsiniz.',
    usage: 'destek-al ',
   
  };