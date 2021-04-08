const { ShardingManager } = require(`discord.js`)
const ayarlar = require(`./ayarlar.json`)

const shards = new ShardingManager(`./index.js`, { //Ana Dosyanızın İsmini Giriniz.
  token : process.env.token,
  totalShards : 1 }); //Shard Sayınız. (1000 Sunucuda Bir Shard Açmanız Sağlıklı Olucaktır :wink:)

shards.on(`launch`, shard => {
console.log(`[${new Date().toString().split(` `, 5).join(` `)}] Shard: #${shard.id}`) })
          
shards.on(`message`, (shard, msg) => {
console.log(`[${new Date().toString().split(` `, 5).join(` `)}] #${shard.id} | ${msg._eval} | ${msg._result}`) });

shards.spawn()