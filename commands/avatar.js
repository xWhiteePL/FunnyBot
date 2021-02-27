module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic'],
    cooldown: 60,
    description: 'Pokazuje avatar uzytkownika!',
    execute(client, message, cmd, args, Discord) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        let embed = new Discord.MessageEmbed()
        .setTitle(`Avatar ${member.username}`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);
    }
}