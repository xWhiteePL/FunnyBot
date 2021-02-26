module.exports = {
    name: 'unmute',
    aliases: 'um',
    cooldown: 1,
    description: "Odcisza uzytkownika!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        if(!message.member.hasPermission("KICK_MEMBERS")){
            message.channel.send("Nie posiadasz uprawnien do korzystania z tej komendy!");
        }
        const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === '𝙼𝚞𝚝𝚎𝚍');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> został odciszony`);
            target.send('Zostałeś odciszony (Funny Discord)')
            message.delete();
        } else{
            message.channel.send('Nie moge znalezc tego uzytkownika!');
        }
        const guild = client.guilds.cache.get('813728700083339274');
        const channel = message.guild.channels.cache.get('814097618941771817');
        let log = new MessageEmbed()
        .setAuthor("Log!")
        .setDescription(`${message.member} odmutowal ${target}!`)
        .setColor("#FF0000")
        .setTimestamp();
        channel.send(log);
    }
}