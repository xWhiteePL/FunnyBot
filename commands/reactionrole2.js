module.exports = {
    name: 'reactionrole2',
    cooldown: 1,
    description: "Po zostawieniu reakcji pod wiadomoscia otrzymujesz role!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
          if(!message.member.hasPermission("ADMINISTRATOR")){
        return message.channel.send("Nie masz uprawnień by użyć tą komendę!");
    }
        const channel = '814233243423473684';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Rocket League");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Minecraft");
        const eventRole = message.guild.roles.cache.find(role => role.name === "Gta V");
        const eveentRole = message.guild.roles.cache.find(role => role.name === "League Of Legends");
        const eveeentRole = message.guild.roles.cache.find(role => role.name === "Rust");

        const yellowTeamEmoji = '🚘';
        const blueTeamEmoji = '🌅';
        const eventEmoji = '🛵';
        const eveentEmoji = '😜';
        const eveeentEmoji = '🪓';


 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Reaction Role Gry')
            .setDescription('\`Emoji RL:  🚘\` \n\n\`Emoji MC:  🌅\` \n\n\`Emoji GTAV:  🛵\` \n\n\`Emoji LOL:  😜\` \n\n\`Emoji Rust: 🪓\`')
            .setFooter('Zareaguj na poniżej opisane emoji aby otrzymywać dostęp do kanałów z danej kategorii!');
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(`${yellowTeamEmoji}`);
        messageEmbed.react(`${blueTeamEmoji}`);
        messageEmbed.react(`${eventEmoji}`);
        messageEmbed.react(`${eveentEmoji}`);
        messageEmbed.react(`${eveeentEmoji}`);
        message.delete();
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
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
                if (reaction.emoji.name === eveeentEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eveeentRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
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
                if (reaction.emoji.name === eveeentEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eveeentRole);
                }
            } else {
                return;
            }
        });
    }
 
}