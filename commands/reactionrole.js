module.exports = {
    name: 'reactionrole',
    cooldown: 1,
    description: "Po zostawieniu reakcji pod wiadomoscia otrzymujesz role!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
          if(!message.member.hasPermission("ADMINISTRATOR")){
        return message.channel.send("Nie masz uprawnień by użyć tą komendę!");
    }
        const channel = '814233243423473684';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Ping Współpraca");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Ping Ogłoszenia");
        const eventRole = message.guild.roles.cache.find(role => role.name === "Ping Giveaway");
        const eveentRole = message.guild.roles.cache.find(role => role.name === "Ping Event");

        const yellowTeamEmoji = '🤝';
        const blueTeamEmoji = '📢';
        const eventEmoji = '🎉';
        const eveentEmoji = '🎊';


 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Reaction Role Pingi')
            .setDescription('\`Emoji pingu współpracy:  🤝\` \n\n\`Emoji pingu ogłoszeń:  📢\` \n\n\`Emoji pingu giveawayu:  🎉\` \n\n\`Emoji pingu eventu:  🎊\`')
            .setFooter('Zareaguj na poniżej opisane emoji aby otrzymywać pingi z danej kategorii!');
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(`${yellowTeamEmoji}`);
        messageEmbed.react(`${blueTeamEmoji}`);
        messageEmbed.react(`${eventEmoji}`);
        messageEmbed.react(`${eveentEmoji}`);
        message.delete();

        client.on('messageReactionAdd', async (reaction, user) => {
    let channel = '814233243423473684';
    let yellowTeamEmoji = '🤝';
    let blueTeamEmoji = '📢';
    let eventEmoji = '🎉';
    let eveentEmoji = '🎊';
    let yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Ping Współpraca");
    let blueTeamRole = message.guild.roles.cache.find(role => role.name === "Ping Ogłoszenia");
    let eventRole = message.guild.roles.cache.find(role => role.name === "Ping Giveaway");
    let eveentRole = message.guild.roles.cache.find(role => role.name === "Ping Event");
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === yellowTeamEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
            }
            if (reaction.emoji.name === blueTeamEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
            }
            if (reaction.emoji.name === eventEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(eventRole);
            }
            if (reaction.emoji.name === eveentEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(eveentRole);
            }
        } else {
            return;
        }
 
});

 
client.on('messageReactionRemove', async (reaction, user) => {
    let channel = '814233243423473684';
    let yellowTeamEmoji = '🤝';
    let blueTeamEmoji = '📢';
    let eventEmoji = '🎉';
    let eveentEmoji = '🎊';
    let yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Ping Współpraca");
    let blueTeamRole = message.guild.roles.cache.find(role => role.name === "Ping Ogłoszenia");
    let eventRole = message.guild.roles.cache.find(role => role.name === "Ping Giveaway");
    let eveentRole = message.guild.roles.cache.find(role => role.name === "Ping Event");
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === yellowTeamEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
        }
        if (reaction.emoji.name === blueTeamEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
        }
        if (reaction.emoji.name === eventEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(eventRole);
        }
        if (reaction.emoji.name === eveentEmoji) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(eveentRole);
        }
    } else {
        return;
    }
});

    }
 
}