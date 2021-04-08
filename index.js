const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./eventLoader.js')(client);
const fs = require('fs');
const  db  = require('quick.db')
const { GiveawaysManager } = require('discord-giveaways');

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => { 
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.on('message', (msg, message, args) => {
  if (msg.content === '.eval') {
    if (!["793589155367354388"].includes(message.author.id))//eval kullanack kişilerin id'lerini girin
                return message.reply("`code` komutunu kullanmak için gerekli izne sahip değilsiniz!").catch();
    let result = eval(args.join(" "))
message.channel.send(result)
  }
});


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });



///////////////////////eklendim atıldım

client.on('guildDelete', guild => {

    let Crewembed = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setTitle(" ATILDIM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
       client.channels.cache.get('811177532816359434').send(Crewembed);
      
    });
    
    
    client.on('guildCreate', guild => {
    
    let Crewembed = new Discord.MessageEmbed()
    
    .setColor("GREEN")
    .setTitle("EKLENDİM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
       client.channels.cache.get('811177439786041407').send(Crewembed);
      
    });
    //-------------------EKLENDİM ATILDIM SON ---------------//


  //-------------------- Afk Sistemi --------------------//

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const cowboy = new Discord.MessageEmbed()

      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`Afk Modundan Başarıyla Çıkıldı.`);

    message.channel.send(cowboy);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const cowboy = new Discord.MessageEmbed()

      .setColor("RANDOM")
      .setDescription(`**Bu Kullanıcı Afk**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``);

    message.channel.send(cowboy);
  }
});


  //-------------------- Reklam Engel Sistemi --------------------//
///reklam///
client.on("message", async msg => {
    let antoxd = await db.fetch(`antoxd${msg.guild.id}`);
    if (antoxd === "acik") {
     
      const reklam = ["discord.gg", "https://discordapp.com/invite/"];
      if (reklam.some(word => msg.content.includes(word))) {
        msg.delete();
      }
    }
  });
  
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "Youtube") {
      msg.reply("**__Youtube Link__** : https://youtube.com/hunterkingyt"); 
    }
  });
  
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "youtube") {
      msg.reply("**__Youtube Link__** : https://youtube.com/hunterkingyt");
    }
  });
  
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "YOUTUBE") {
      msg.reply("**__Youtube Link__** : https://youtube.com/hunterkingyt");
    }
  });
//----------------------------LİNK ENGEL ----------------------------------------------------||

client.on("message", async  msg => {
  var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
     if (mayfe == 'acik') {
         const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".rf.gd", ".az", ".party", "discord.gg",];
         if (birisireklammidedi.some(word => msg.content.includes(word))) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                     return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !').then(msg => msg.delete(3000));
     
 
   msg.delete(3000);                              
 
             }              
           } catch(err) {
             console.log(err);
           }
         }
     }
     else if (mayfe == 'kapali') {
       
     }
     if (!mayfe) return;
   })
   ;
 
 //----------------------------LİNK ENGEL SON----------------------------------------------------||



//capsengel a.
client.on("message", async message => { 
  var anahtar = db.fetch(`caps_${message.guild.id}`)
  if(anahtar === "acik"){
    if(message.author.bot) return;
    if(message.content.length < 5) return;
    let capsengel = message.content.toUpperCase();
    let beyazliste =
      message.mentions.users.first() ||
      message.mentions.channels.first() ||
      message.mentions.roles.first()
      
   if(message.content == capsengel){
    if(!beyazliste && !message.content.includes("@everyone") && !message.content.includes("@here") && !message.member.hasPermission("BAN_MEMBERS"))
      {
        message.delete().then(message.channel.send("Büyük harf kullanmamalısın.!!!").then(i => i.delete(10000)))
      
      }}
      

    
    
  }
  if(!anahtar) return;
})
//capsengel son


//kanalkoruma
client.on('channelDelete', async channel => {
  var logk= await db.fetch(`kanalklog_${channel.guild.id}`)
if(logk){ 
  let kategori = channel.parentID;
  channel.clone(channel.name).then(channels => {
  let newkanal = channel.guild.channels.cache.find("name", channel.name)
  channels.setParent(channel.guild.channels.cache.find(channelss => channelss.id === kategori));
  client.channels.cache.get(logk).send(`${channel.name} adlı kanal silindi yeniden açıp izinlerini ayarladım.`);                     
});
}else return;
});
//kanalkoruma son

//-------------------- Ever Here Engel --------------------//

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var e = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(e);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

//-------------------- Ever Here Engel --------------------//


//KanalKoruma

client.on("channelDelete", async function(channel) {
  let rol = await db.fetch(`kanalk_${channel.guild.id}`);

if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

channel.clone().then(z => {
  let kanal = z.guild.channels.find(c => c.name === z.name);
  kanal.setParent(
    kanal.guild.channels.find(channel => channel.id === channelp)
    
  );
});
}
})


client.login(process.env.token);

//--------------------------------------------------------------------------------------\\



client.on('message', msg => {
  if (msg.content === '<@!754040174236925952>') {
    msg.channel.send('**Merhaba, Değerli Kullanıcım\nPrefixim : . **');
  }
});

//-----------------------------------------------------------------------------------------\\

client.on("message", async msg => {
 
 
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {
 
                  return msg.channel.send(
                    '<a:798914084535926824:806932591772958791>   Aleyküm Selam, Hoşgeldin')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
   
    }
    if (!i) return;
 
    });




client.on("guildCreate", guild => {

let pinkcode = "812248107554832444"

if (guild.memberCount <  10) { //kişi sınırını ayarlayabilirsiniz

guild.leave()

return client.channels.cache.get(pinkcode).send("Eklendiğim sunuculardan birisi 10 üye altında olduğu için çıktım.")
};
});

client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){

       msg.reply(`Afk'lıktan Çıktınız`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});


//---------------------------------------------------------------------------\\

