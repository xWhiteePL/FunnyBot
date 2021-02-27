const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://xwhit3e:whiteisthebest@cluster0.h4z0c.mongodb.net/xwhit3e?retryWrites=true&w=majority")
module.exports = {
    name: 'rank',
    cooldown: 10,
    description: "Pokazuje aktualny poziom!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
      let member = message.author.id || message.mentions.users.first().id;
      let avatar = message.member.user.displayAvatarURL();
      const user = await Levels.fetch(member, message.guild.id);
      const embed = new MessageEmbed()
      .setAuthor(`${message.member.user.tag}`, avatar)
      .addField(`XP`, `${user.xp}`, true)
      .addField(`Aktualny poziom`, `${user.level}`, true)
      .setTimestamp();
      message.channel.send(embed);
      message.delete();
    }
}