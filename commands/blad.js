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
        if(!channel) return message.channel.send('Kanal do bledow nie istnieje!');

        const themat = args[0];
        const messageArgs = args.slice(1).join(' ');
        const embedy = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(themat)
        .setDescription(messageArgs)
        .setFooter("👍 - Przyjete, ❌ - Odrzucone!")
        .setTimestamp();
        message.channel.send(`Twoje zgloszenie zostalo wyslane do administracji!`);

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
                    channel.send(`Zgloszenie o temacie '${themat}' zostalo odrzucone przez ${reaction.message.guild.members.cache.get(user.id)}!`);
                    message.author.send(`Twoje zgloszenie o temacie '${themat}' zostalo odrzucone!`);
                    reaction.message.delete();
                }
                if (reaction.emoji.name === emojix) {
                    channel.send(`Zgloszenie o temacie '${themat}' zostalo przyjete przez ${reaction.message.guild.members.cache.get(user.id)}!`);
                    message.author.send(`Twoje zgloszenie o temacie '${themat}' zostalo przyjete!`);
                    reaction.message.delete();
                    const embedfd = new Discord.MessageEmbed()
                    .setColor('FADF2E')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(themat)
                    .setDescription(messageArgs)
                    .setFooter("Zgloszenie ktore przyjales!")
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