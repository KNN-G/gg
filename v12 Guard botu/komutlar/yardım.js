const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix
//Göktürk Software & Mert ☾#6954
  
const yardım = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`**Göktürk Software Yardım Menüsü**`)

.setDescription(`**Göktürk Software :)**

\<a:Ceixsa127:850373384298037330> **\`${prefix}avatar\`: Avatarınızı Atar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}ban\`: Etiketlenen Kişiyi Banlar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}ban-log\`: Banlanan Kişilerin Kayıtlarını Tutar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}duyuru\`: İstediğiniz Duyuruyu Atar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}istatistik\`: Botun İstatistiklerini Atar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}kanal-koruma <aç/kapat>\`: Sunucunuzda Kanal Korumayı Açar/Kapatır.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}kurallar\`: Kanala Otomatik Kuralları Atar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}küfür-engel <aç/kapat>\`: .**

\<a:Ceixsa127:850373384298037330> **\`${prefix}mod-log <#kanal>\`: Modlog Özelliğini Açar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}ping\`: Adı Üstünde.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}reklam-engel <aç/kapat>\`: .**

\<a:Ceixsa127:850373384298037330> **\`${prefix}say\`: Sunucunuzdaki Üyeleri Sayar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}sohbet-kapat\`: Sohbeti Kapatır.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}sohbet-aç\`: Sohbeti Açar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}sunucu-kur\`: Oto Sunucu Kurar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}sil <miktar>\`: Belirtilen Miktarda Mesaj Siler.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}unban\`: İd'si Girilen Kullanıcının Banını Açar.**

\<a:Ceixsa127:850373384298037330> **\`${prefix}yetkilerim\`: Botun Yetkilerini Gösterir.**


`)


//Göktürk Software & Mert ☾#6954




.setFooter(`Göktürk Software was here`)
message.channel.send(yardım)
  
   
  
};
//Göktürk Software & Mert ☾#6954
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["yardım", "yardım menü","yardim","YARDIM","Yardım"], 
  permLevel: 0
};

exports.help = {
  name: "yardımm",
  description: 'Yardım Menüsü',
  usage: 'yardım'
};//Göktürk Software & Mert ☾#6954