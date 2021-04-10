const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://xwhit3e:whiteisthebest@cluster0.h4z0c.mongodb.net/xwhit3e?retryWrites=true&w=majority")
module.exports = {
    name: 'rank',
    cooldown: 10,
    description: "Pokazuje aktualny poziom!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      let idmember = member.id;
      const user = await Levels.fetch(idmember, message.guild.id);
      const embed = new MessageEmbed()
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .addField(`XP`, `${user.xp} (${Levels.xpFor(user.level + 1)})`, true)
      .addField(`Aktualny poziom`, `${user.level}`, true)
      .setTimestamp();
      message.channel.send(embed);
      message.delete();
    }
}