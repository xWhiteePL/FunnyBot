const Discord = require('discord.js');

const db = require('quick.db');
module.exports = {
    name: 'warnings',
    aliases: ['warns'],
    cooldown: 0,
    description: "Komenda sluzaca do sprawdzenia ilosci uzytkownika!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;


        let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === null) warnings = 0;

        message.channel.send(`**${user}** posiada \`${warnings}\` ostrzeżeń(-a)`);
        message.delete();
    }
}