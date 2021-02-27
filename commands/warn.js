const Discord = require('discord.js');

const db = require('quick.db');
module.exports = {
    name: 'warn',
    cooldown: 0,
    description: "Komenda sluzaca do ostrzegania uzytkownikow!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Nie masz uprawnień by użyć tą komendę');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send('Oznacz użytkownika');

        if(user.bot) return message.channel.send('Nie możesz ostrzec bota');

        if(message.author.id === user.id) return message.channel.send('Nie możesz ostrzec samego siebie');

        if(message.guild.owner.id === user.id) return message.channel.send('Nie możesz ostrzec właścicielowi serwera');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Brak';

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === 5) return message.channel.send(`${user} już posiada 5 ostrzeżeń`);
        const user = getUserFromMention(user)


        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1);
            user.send(`Zostałeś ostrzeżony na serwerze ${message.guild.name}. Za: \`${reason}\``)
            await message.channel.send(`**${user.author.tag}** został ostrzeżony`)
        }

        if(warnings !== null){
            db.add(`warnings_${message.guild.id}_${user.id}`, 1);
            user.send(`Zostałeś ostrzeżony na serwerze ${message.guild.name}.Za: \`${reason}\``)
            await message.channel.send(`**${user.author.tag}** został ostrzeżony`)
        }
        const guild = client.guilds.cache.get('813728700083339274');
        const channela = message.guild.channels.cache.get('814097618941771817');
        let log = new MessageEmbed()
        .setAuthor("Log! (/warn)")
        .setDescription(`${message.member} ostrzegł ${user.author.tag}!`)
        .addField(`Za`, `${reason}`)
        .setColor("#FF0000")
        .setTimestamp();
        channela.send(log);
    }
}