const moment = require('moment')
module.exports = {
    name: 'info',
    alises: ['userinfo', 'user'],
    cooldown: 3,
    description: "Wyswietla informacje o uzytkowniku!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        const status = {
            online: "Online",
            idle: "Zaraz Wracam",
            dnd: "Nie Przeszkadzac",
            offline: "Offline/Niewidoczny"
        };
            let acknowledgements;
           
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
            const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
        
            const embed = new Discord.MessageEmbed()
                .setDescription(`<@${member.user.id}>`)
                .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
                .setColor(randomColor)
                .setFooter(`ID: ${message.author.id}`)
                .setThumbnail(member.user.displayAvatarURL())
                .setTimestamp()
                .addField("Status",`${status[member.user.presence.status]}`, true)
                .addField('Dołączył: ',`${moment(member.joinedAt).format("DD.MM.YYYY,\n HH:mm")}`, true)
                .addField("Konto Stworzone: ",`${moment(message.author.createdAt).format("DD.MM.YYYY,\n HH:mm")}`, true)
                .addField(`Role [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true);
                
            message.channel.send(embed);
            message.delete();
    }
}