module.exports = {
    name: 'wspolpraca',
    aliases: 'wp',
    cooldown: 5,
    description: "Nadaje range wspolpracy!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
      if(!message.member.permissions.has('VIEW_AUDIT_LOG')) return;
      const user = message.mentions.users.first();
      if (!user) return message.channel.send('Podaj użytkownika któremu mam nadać rangę');
      const wspolpraca = message.guild.roles.cache.find(role => role.name === "𝗪𝘀𝗽𝗼𝗹𝗽𝗿𝗮𝗰𝗮");
      if (!wspolpraca) return message.channel.send('Brak roli współpracy')
      await message.guild.members.cache.get(user.id).roles.add(wspolpraca);
      message.channel.send(`Partner: ${user}`);
      message.delete();
    }
}