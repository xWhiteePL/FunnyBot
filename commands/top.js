const Levels = require('discord-xp')
Levels.setURL("mongodb+srv://xwhit3e:whiteisthebest@cluster0.h4z0c.mongodb.net/xwhit3e?retryWrites=true&w=majority")
const db = require('quick.db')
module.exports = {
    name: 'top',
    description: "Pokazuje topki",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) { 
      if (!args[0]) return message.channel.send('Podaj typ rankingu który chcesz wyświetlić, dostępne komendy: /top rank, /top eco')
      if (args[0] == "rank") {
                const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderboard.length < 1) return reply("Nikogo nie ma w topliscie!");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard); 

        const embed = new MessageEmbed()
        .setTitle(`Ranking Poziomow`)
        .setDescription(`${leaderboard.map(e => `${e.position}. **${e.username}**\nPoziom: \`${e.level}\`\nXP: ${e.xp}\n\n`)}`)
        .setFooter(`FunnyDiscord`)
        .setTimestamp();

        message.channel.send(embed);
      } else if (args[0] == "eco") {
        
      } else return message.channel.send('Taki ranking nie istnieje! Dostępne rankingi: /top rank, /top eco');


    }
}