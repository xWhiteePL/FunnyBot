module.exports = {
    name: 'ban',
    cooldown: 0,
    description: "Komenda sluzaca do banowania uzytkownikow!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!message.member.hasPermission("BAN_MEMBERS")){
            return message.channel.send("Nie masz uprawnień by użyć tą komendę!");
        }
      
        else{
            if(!member)
                return message.channel.send("Oznacz użytkownika którego mam zbanować!");
            if(!member.bannable) 
                return message.channel.send("Nie mogę zbanować tej osoby!");
      
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "Brak!";
      
            member.ban({reason: reason})
                .catch(error => message.channel.send(`Przepraszam ${message.author}, nie mogę zbanować tego użytkownika!`));
            let embed = new MessageEmbed()
            .setAuthor("Ogłoszenie!")
            .setDescription(`${member} został zbanowany przez ${message.author}`)
            .addField(`Powód:`, `${reason}`)
            .setColor("#FF0000")
            .setTimestamp();
            let pw = new MessageEmbed()
            .setAuthor("Ogłoszenie! (Funny Discord)")
            .setDescription(`Zostałeś zbanowany przez ${message.author}`)
            .addField(`Powód:`, `${reason}`)
            .setColor("#FF0000")
            .setTimestamp();
            member.send(pw);
            message.channel.send(embed);
            message.delete();
            const guild = client.guilds.cache.get('813728700083339274');
            const channel = message.guild.channels.cache.get('814097618941771817');
            let log = new MessageEmbed()
            .setAuthor("Log! (/ban)")
            .setDescription(`${message.member} zbanował użytkownika ${member}!`)
            .addField(`Za`, `${reason}`)
            .setColor("#FF0000")
            .setTimestamp();
            channel.send(log);
        }
    }
}