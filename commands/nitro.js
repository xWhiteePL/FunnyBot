const ms = require('ms');
const moment = require('moment');
module.exports = {
    name: 'nitro',
    cooldown: 59,
    description: 'Generuje kod nitro!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
      const hanel = message.guild.channels.cache.get('814965243155054624');
      message.delete();
      if (message.channel.id == hanel) {
      const user = message.author;
        let code = "";
        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i = 0; i < 18; i++) {
            code = code + letters.charAt(Math.floor(Math.random() * letters.length));
        }
      const embed = new MessageEmbed()
      .setAuthor(`Nitro Gen`, user.displayAvatarURL())
      .setDescription(`\`https://discord.gift/${code}\``)
      .setFooter(`Funny Discord`)
      .setTimestamp();
      user.send(embed).then(m => m.delete({ timeout:300000 }));
      message.channel.send('Gratulacje! Twój gift/konto znajdziesz na pv!').then(m => m.delete({ timeout:15000 }));
    } else return message.channel.send('Tej komendy możesz użyć tylko na kanale nitro gen!').then(m => m.delete({ timeout:8000 }));
    }
}
