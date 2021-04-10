const Discord = require('discord.js');

const db = require('quick.db');
const warnings = require('./warnings');
module.exports = {
    name: 'deletewarn',
    aliases: ['delwarn'],
    cooldown: 0,
    description: "Komenda sluzaca do usuwania ostrzezen uzytkownika!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Nie masz uprawnień by użyć tą komendę.');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('Oznacz użytkownika');

        if(user.bot) return message.channel.send('Nie możesz usunąć ostrzeżenia botowi');


        if(warnings === null) return message.channel.send(`**${user.username} nie posiada ostrzeżeń**`);


        db.add(`warnings_${message.guild.id}_${user.id}`, -1);

        message.channel.send('Sukces, ostrzeżenie zostało cofnięte!');
        const guild = client.guilds.cache.get('813728700083339274');
        const channela = message.guild.channels.cache.get('814097618941771817');
        let log = new MessageEmbed()
        .setAuthor("Log! (/delwarn)")
        .setDescription(`${message.member} usunal warna uzytkownikowi ${user}!`)
        .setColor("#FF0000")
        .setTimestamp();
        channela.send(log);
        message.delete();
    }
}