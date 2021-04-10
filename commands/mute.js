const { MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'mute',
    cooldown: 1,
    description: "Wycisza użytkownika",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
        if(!message.member.hasPermission("KICK_MEMBERS")){
            return message.channel.send("Nie posiadasz uprawnien do korzystania z tej komendy!");
        }
        const reason = args.slice(2).join(' ');
        if(!reason) {
            let reason = ("Brak!");
        }
        const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!target) return message.reply('Nie oznaczyłeś użytkownika którego mam wyciszyć!');
        if (target) {
 
            let muteRole = message.guild.roles.cache.find(role => role.name === '𝙼𝚞𝚝𝚎𝚍');
 
            let memberTarget = message.guild.members.cache.get(target.id);
            let sicon = message.mentions.users.first().displayAvatarURL();
 
            if (!args[1]) return message.channel.send('Podaj czas wyciszenia');
            if (!args[2]) return message.channel.send('Podaj powód wyciszenia');
            if (args[1]) {
            memberTarget.roles.add(muteRole.id);
            let embed = new MessageEmbed()
            .setAuthor(`Mute!`, sicon)
            .setDescription(`Użytkownik <@${memberTarget.user.id}> został wyciszony(-a)!`)
            .addField(`Za:`, `${reason}`, true)
            .addField(`Na:`, `${ms(ms(args[1]))}`, true)
            .addField(`Przez:`, `${message.author}`)
            .setThumbnail(sicon)
            .setColor("#FF0000")
            .setTimestamp();
            message.channel.send(embed);
            let pw = new MessageEmbed()
            .setAuthor(`Mute! (Funny Discord)`, sicon)
            .setDescription(`Zostales wyciszony(-a)!`)
            .addField(`Za:`, `${reason}`, true)
            .addField(`Na:`, `${ms(ms(args[1]))}`, true)
            .addField(`Przez:`, `${message.author}`)
            .setThumbnail(sicon)
            .setColor("#FF0000")
            .setTimestamp();
            target.send(pw);
            message.delete();
            }
 
            setTimeout(function () {
                target.send('Zakonczyles kare, mozesz juz pisac na chacie (Funny Discord)');
                const channel1 = message.guild.channels.cache.get('814097618941771817');
                let log = new MessageEmbed()
                .setAuthor("Log!")
                .setDescription(`${target} zakonczyl kare i moze juz pisac na chacie!`)
                .setColor("#FF0000")
                .setTimestamp();
                channel1.send(log);
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
            
        } else {
            message.channel.send('Nie moge znalezc tego uzytkownika!');
        }
        const guild = client.guilds.cache.get('813728700083339274');
        const channel = message.guild.channels.cache.get('814097618941771817');
        let memberTarget = message.guild.members.cache.get(target.id);
        let log = new MessageEmbed()
        .setAuthor("Log! (/mute)")
            .setDescription(`Użytkownik <@${memberTarget.user.id}> został wyciszony(-a)!`)
            .addField(`Za:`, `${reason}`, true)
            .addField(`Na:`, `${ms(ms(args[1]))}`, true)
            .addField(`Przez:`, `${message.author}`)
            .setColor("#FF0000")
            .setTimestamp();
        channel.send(log);
    }
}