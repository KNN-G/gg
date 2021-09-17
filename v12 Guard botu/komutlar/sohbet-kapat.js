const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false//Göktürk Software & Mert ☾#6954
  });

  message.channel.send("Sohbet kanalı ``Yazılamaz`` durumuna getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};
//Göktürk Software & Mert ☾#6954
exports.help = {
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};