const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    name: 'baladd',
    cooldown: 0,
    description: "Nie interesuj sie",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) { 
              if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.channel.send("Nie masz uprawnień by użyć tą komendę");
        }
        const user = message.author;
        const amount = args[0];
        if (isNaN(amount)) return message.channel.send('Podaj prawidłową cyfrę!');
        if (!amount) return message.channel.send('Podaj prawidłową cyfrę!');
        db.add(`money_${message.guild.id}_${user.id}`, amount);
        message.channel.send(`${amount} zostało dodane do twojego konta!`);

    }
}