module.exports = {
    name: 'poll',
    aliases: 'ankieta',
    cooldown: 3,
    description: "Komenda do utworzenia ankiety!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie posiadasz uprawnien do korzystania z tej komendy!");
        const channel = message.channel;
        let question = message.content.split(`${prefix}poll `).join ("");
        if (!question){
            return message.channel.send("Napisz treść ankiety!");
        }
        const embed = new MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Pojawiła się nowa ankieta!")
        .setDescription(question)
        .setFooter("No dalej, zagłosuj!")
        .setTimestamp();
        let msg = await client.channels.cache.get(channel.id).send(embed);
        await msg.react("👍")
        await msg.react("👎")
        message.delete();
    }
}