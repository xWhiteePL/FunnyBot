module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic'],
    description: 'Pokazuje avatar uzytkownika!',
    execute(client, message, cmd, args) {

        if (!message.mentions.users.size) {
            return message.channel.send(`**Twoj avatar: ** ${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const avatar_list = message.mentions.users.map(user => {
            return `**Avatar uzytkownika ${user.username}: ** ${user.displayAvatarURL({ dynamic: true })}`;
        });

        message.channel.send(avatar_list);
        message.delete();
    }
}