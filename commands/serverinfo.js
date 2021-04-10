module.exports = {
    name: 'serverinfo',
    aliases: ['sinfo', 'server'],
    cooldown: 3,
    description: "Pokazuje informacje na temat serwera!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        function checkBots(guild) {
            let botCount = 0;
            guild.members.cache.forEach(member => {
                if(member.user.bot) botCount++;
            });
            return botCount;
        }
        
        function checkMembers(guild) {
            let memberCount = 0;
            guild.members.cache.forEach(member => {
                if(!member.user.bot) memberCount++;
            });
            return memberCount;
        }
    
        function checkOnlineUsers(guild) {
            let onlineCount = 0;
            guild.members.cache.forEach(member => {
                if(member.user.presence.status === "online");
                    onlineCount++; 
            });
            return onlineCount;
        }
    
        let sicon = message.guild.iconURL();

        const serverembed = new MessageEmbed()
            .setAuthor(`${message.guild.name} - Informacje`, message.member.displayAvatarURL())
            .setColor("#15f153")
            .addField('Właściciel:', 'xWhit3e#7457', true)
            .addField('Region Serwera:', 'Europa', true)
            .setThumbnail(sicon)
            .addField("Nazwa Serwera:", message.guild.name)
            .addField('Poziom Weryfikacji:', message.guild.verificationLevel, true)
            .addField('Ilość Kanałów:', message.guild.channels.cache.size, true)
            .addField('Łączna liczba członków:', message.guild.memberCount)
            .addField('Ludzie:', checkMembers(message.guild), true)
            .addField('Boty:', checkBots(message.guild), true)
            .addField('Online', checkOnlineUsers(message.guild))
            .setFooter(`Serwer Stworzony: ${message.guild.createdAt}`)
            .setTimestamp();
    
        message.channel.send(serverembed);
        message.delete();
    }
}