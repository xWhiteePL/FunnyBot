module.exports = (Discord, client, message) => {
    client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '𝚄𝚜𝚎𝚛');
     
        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get('814434177717370900').send(`Siema <@${guildMember.user.id}>! Pamietaj o sprawdzeniu regulaminu!`)
    });
}