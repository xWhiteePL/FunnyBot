const { join } = require('path');
module.exports = {
    name: 'suggestion',
    aliases: ['suggest', 'propozycja'],
    cooldown: 300,
    description: 'Tworzy propozycje!',
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        const guild = client.guilds.cache.get('813728700083339274');
        const channel = message.guild.channels.cache.get('814273664790954014');
        if(!channel) return message.channel.send('Kanał do propozycji nie instnieje!');

        const messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs)
        .setFooter("No dalej, zaglosuj!")
        .setTimestamp();
        message.channel.send(`Twoja propozycja zostala wyslana!`);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}