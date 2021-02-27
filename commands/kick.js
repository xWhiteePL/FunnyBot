module.exports = {
    name: 'kick',
    cooldown: 1,
    description: "Komenda sluzaca do wyzucania uzytkownikow!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send("Nie posiadasz uprawnien do korzystania z tej komendy!");
    }
    else{
        if(!member)
            return message.channel.send("Oznacz uzytkownika ktorego mam wyrzucic!");
        if(!member.kickable) 
            return message.channel.send("Nie moge wyrzucic tej osoby!");
  
        let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = ("Brak!");
        let sicon = message.mentions.users.first().displayAvatarURL();
        member.kick(reason)
            .catch(error => message.channel.send(`Przepraszam ${message.author}, nie mogę wyrzucic tego uzytkownika. Problem: ${error}`));
            let embed = new MessageEmbed()
            .setAuthor("Kick!", sicon)
            .setDescription(`${member} zostal wyrzucony przez ${message.author}`)
            .addField(`Powod:`, `${reason}`)
            .setThumbnail(sicon)
            .setColor("#FF0000")
            .setTimestamp();
            let pw = new MessageEmbed()
            .setAuthor("Kick! (Funny Discord)")
            .setDescription(`Zostales wyrzucony przez ${message.author} (Funny Discord)`)
            .addField(`Powod:`, `${reason}`)
            .setThumbnail(sicon)
            .setColor("#FF0000")
            .setTimestamp();
            message.channel.send(embed);
            member.send(pw);
            message.delete();
            const guild = client.guilds.cache.get('813728700083339274');
            const channel = message.guild.channels.cache.get('814097618941771817');
            let log = new MessageEmbed()
            .setAuthor("Log! (Mute)")
            .setDescription(`${message.member} wyrzucil uzytkownika ${member} za ${reason}!`)
            .setColor("#FF0000")
            .setTimestamp();
            channel.send(log);
    }
    }
}