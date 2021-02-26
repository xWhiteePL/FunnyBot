module.exports = {
    name: 'ban',
    cooldown: 1,
    description: "Komenda sluzaca do banowania uzytkownikow!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!message.member.hasPermission("BAN_MEMBERS")){
            message.channel.send("Nie posiadasz uprawnien do korzystania z tej komendy!");
        }
      
        else{
            if(!member)
                return message.channel.send("Oznacz uzytkownika ktorego mam zbanowac!");
            if(!member.bannable) 
                return message.channel.send("Nie moge zbanowac tej osoby!");
      
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "Brak!";
      
            member.ban({reason: reason})
                .catch(error => message.channel.send(`Przepraszam ${message.author}, nie moge zbanowac tego użytkownika!`));
            let embed = new MessageEmbed()
            .setAuthor("Ogloszenie!")
            .setDescription(`${member} został zbanowany przez ${message.author}`)
            .addField(`Powod:`, `${reason}`)
            .setColor("#FF0000")
            .setTimestamp();
            let pw = new MessageEmbed()
            .setAuthor("Ogloszenie!")
            .setDescription(`Zostales zbanowany przez ${message.author}`)
            .addField(`Powod:`, `${reason}`)
            .setColor("#FF0000")
            .setTimestamp();
            member.send(pw);
            message.channel.send(embed);
            message.delete();
            const guild = client.guilds.cache.get('813728700083339274');
            const channel = message.guild.channels.cache.get('814097618941771817');
            let log = new MessageEmbed()
            .setAuthor("Log! (/ban)")
            .setDescription(`${message.member} zbanowal uzytkownika ${member} za ${reason}!`)
            .setColor("#FF0000")
            .setTimestamp();
            channel.send(log);
        }
    }
}