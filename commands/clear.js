module.exports = {
    name: 'clear',
    alises: ['c', 'purge'],
    cooldown: 0,
    description: "Usuwa dana liczbe wiadomosci!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            message.channel.send("Nie posiadasz uprawnien do korzystania z tej komendy!");
        }
        if(!args[0]) return message.reply('Podaj liczbe wiadomosci do usuniecia!');
        if(isNaN(args[0])) return message.reply('Uzyj cyfr!');

        if(args[0] > 100) return message.reply('Mozesz usunac maksymalnie 100 wiadomosci!');
        if(args[0] < 1) return message.reply('Podaj liczbe wieksza niz 0');
        message.delete();
        message.channel.bulkDelete(args[0]);
        const guild = client.guilds.cache.get('813728700083339274');
        const channel = message.guild.channels.cache.get('814097618941771817');
        let log = new MessageEmbed()
        .setAuthor("Log! (/clear)")
        .setDescription(`${message.member} usunal \`${args[0]}\` wiadomosci na kanale ${message.channel}!`)
        .setColor("#FF0000")
        .setTimestamp();
        channel.send(log);
    }
}