const ms = require('ms');
const { join } = require('path');
module.exports = {
    name: 'blad',
    aliases: ['bug'],
    cooldown: 300,
    description: 'Zglasza blad!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        const guild = client.guilds.cache.get('813728700083339274');
        const channel = message.guild.channels.cache.get('814409765891342337');
        if(!channel) return message.channel.send('Kanał do zgłaszania błędów nie istnieje!');

        const themat = args[0];
        const messageArgs = args.slice(1).join(' ');
        const embedy = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(themat)
        .setDescription(messageArgs)
        .setFooter("👍 - Przyjete, ❌ - Odrzucone!")
        .setTimestamp();
        message.channel.send(`Twoje zgłoszenie zostało wysłane do administracji!`);

        const emojix = '👍';
        const emojixx = '❌';
        

        channel.send(embedy).then((msg) =>{
            msg.react(emojix);
            msg.react(emojixx);
            message.delete();
        }).catch((err)=>{
            throw err;
        });

        client.on('messageReactionAdd', async (reaction, user, MessageEmbed) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === emojixx) {
                    channel.send(`Zgłoszenie o temacie '${themat}' zostało odrzucone przez ${reaction.message.guild.members.cache.get(user.id)}!`);
                    message.author.send(`Twoje zgłoszenie o temacie '${themat}' zostalo odrzucone!`);
                    reaction.message.delete();
                }
                if (reaction.emoji.name === emojix) {
                    channel.send(`Zgłoszenie o temacie '${themat}' zostało przyjęte przez ${reaction.message.guild.members.cache.get(user.id)}!`);
                    message.author.send(`Twoje zgłoszenie o temacie '${themat}' zostało przyjęte!`);
                    reaction.message.delete();
                    const embedfd = new Discord.MessageEmbed()
                    .setColor('FADF2E')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(themat)
                    .setDescription(messageArgs)
                    .setFooter("Zgłoszenie które przyjąłes!")
                    .setTimestamp();
                    reaction.message.guild.members.cache.get(user.id).send(embedfd)
                    reaction.message.delete(3);
                }
            } else {
                return;
            }
 
        });
    }
}