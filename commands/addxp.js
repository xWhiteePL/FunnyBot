const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://xwhit3e:whiteisthebest@cluster0.h4z0c.mongodb.net/xwhit3e?retryWrites=true&w=majority")
module.exports = {
    name: 'addxp',
    cooldown: 10,
    description: "Dodaje poziom",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
      if(!message.member.permissions.has('ADMINISTRATOR')) return;
      const ilosc = args[0];
      if(isNaN(ilosc)) return message.channel.send('Podaj wlasciwa cyfre');
      Levels.appendXp(message.author.id, message.guild.id, ilosc);
      message.channel.send(`Gratuluje, na twoje konto wplynelo ${ilosc} XP`);
      message.delete();
    }
}