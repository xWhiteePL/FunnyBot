const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://xwhit3e:whiteisthebest@cluster0.h4z0c.mongodb.net/xwhit3e?retryWrites=true&w=majority")
module.exports = {
    name: 'setlevel',
    cooldown: 10,
    description: "Ustawia wybrany poziom!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
      if(!message.member.permissions.has('ADMINISTRATOR')) return;
      const ilosc = args[0];
      if(isNaN(ilosc)) return message.channel.send('Podaj wlasciwa cyfre');
      Levels.setLevel(message.author.id, message.guild.id, ilosc);
      message.channel.send(`Gratuluje, ustawiles sobie ${ilosc} poziom`);
      message.delete();
    }
}