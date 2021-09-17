const Discord = require("discord.js");


exports.run = (client, message, args) => {

//Göktürk Software & Mert ☾#6954
let member = args[0]
let guild = message.guild;

if(!member) return message.channel.send("Bir İd Gırmelısın")





guild.members.unban(member)

const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())//Göktürk Software & Mert ☾#6954
.setColor('RANDOM')
.addField(`Banı Kaldırlan Kullanıcı`,`<@${member}>`)
.addField(`Yetkili`,message.author)
.setTimestamp()
.setFooter(`${message.author.username} Tarafından Kullanıldı`)
message.channels.cache.send(ban)


};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'unban', 
  description: 'Kullanıcıya Ban Atar', 
  usage: '!ban @user <sebep>' 
};//Göktürk Software & Mert ☾#6954