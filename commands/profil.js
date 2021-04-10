const Levels = require('discord-xp');
const db = require("quick.db");
module.exports = {
    name: 'profil',
    aliases: ['prof'],
    cooldown: 10,
    description: 'Pokazuje serwerowe informacje na temat uzytkownika!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      const idmember = member.id;
      const user = await Levels.fetch(idmember, message.guild.id);
        let bal = db.fetch(`money_${message.guild.id}_${idmember}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${idmember}`)
  if (bank === null) bank = 0;




      const embed = new MessageEmbed()
      .setAuthor(`Profil użytkownika ${member.user.tag}`, member.user.displayAvatarURL())
      .addField(`Poziom:`, `${user.level}`)
      .addField(`Łączny stan konta:`, `${bal + bank}`)
      .setFooter(`FunnyDiscord`)
      .setTimestamp();

      message.channel.send(embed)
    }
}