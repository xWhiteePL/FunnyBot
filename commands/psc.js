const ms = require('ms');
const moment = require('moment');
module.exports = {
    name: 'psc',
    cooldown: 59,
    description: 'Generuje kod paysafecard!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
      const hanel = message.guild.channels.cache.get('822415099695595542');
      message.delete();
      if (message.channel.id == hanel) {
      const user = message.author;
        let code = "";
        let letters = "0123456789";
        for (let i = 0; i < 18; i++) {
            code = code + letters.charAt(Math.floor(Math.random() * letters.length));
        }
      const embed = new MessageEmbed()
      .setAuthor(`PSC Gen`, user.displayAvatarURL())
      .setDescription(`\`0${code}\``)
      .setFooter(`Funny Discord`)
      .setTimestamp();
      user.send(embed).then(m => m.delete({ timeout:300000 }));
      message.channel.send('Gratulacje! Twój gift/konto znajdziesz na pv!').then(m => m.delete({ timeout:15000 }));
    } else return message.channel.send('Tej komendy możesz użyć tylko na kanale psc gen!').then(m => m.delete({ timeout:8000 }));
    }
}
