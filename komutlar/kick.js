const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
	let rol = db.fetch(`banrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Ban yetkili rolü ayarlanmamış veya <@&' + rol + '> Rolüne sahip değilsin.')
	let kicklog = db.fetch(`kicklog_${message.guild.id}`)
	if(!kicklog) return message.channel.send('**Kick Log Sistemi Ayarlanmamış.**')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send('<a:emoji_16:768686831063531530>  **Bir kişi etiketlemelisin.**')
     if(user.id === message.author.id) return message.channel.send('<a:emoji_16:768686831063531530>  **Kendini Kickleyemezsin**')
     if(user.id === client.user.id) return message.channel.send('<a:emoji_16:768686831063531530>  **Botu Kickleyemezsin**')
  if(user.id === message.guild.ownerID) return message.channel.send('<a:emoji_16:768686831063531530>  **Sunucu sahibini Kickleyemessin Zaten Yetkim Yetmez :)**')
    if (!message.guild.member(user).bannable) return message.reply('<a:emoji_16:768686831063531530>  **Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.**');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle Kicklemek istediğine eminmisin ?**').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).kick({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTitle('Bir Kişi Kick Yedi <a:yes:802629858365669437> ')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Kicklenen Kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(kicklog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('Kickleme İşlemi İptal Edildi <a:792704133903810560:806932613322768404>')
      })
    })
 })
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "kick"
}