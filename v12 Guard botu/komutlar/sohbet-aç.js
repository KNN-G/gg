const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

  message.channel.send("Sohbet kanalı ``Yazılamaz`` durumuna getirildi.");
};
//Göktürk Software & Mert ☾#6954
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-aç",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};//Göktürk Software & Mert ☾#6954