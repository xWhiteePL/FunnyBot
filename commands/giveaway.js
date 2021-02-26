module.exports = {
    name: 'giveaway',
    alises: ['event', 'ga'],
    cooldown: 3,
    description: "Tworzy giveaway!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        var time = '';
        var time2 = '';
        var time3 = '';
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Nie masz odpowiednich uprawniej do stworzenia giveawaya.');
        if (message.content === `${prefix}giveaway`) return message.channel.send(`Nie podales czasu giveawaya.`)
        if (message.content !== `${prefix}giveaway`) {
            const stated_duration_hours = message.content.split(' ')[1];
            const stated_duration_hours2 = stated_duration_hours.toLowerCase();
            if (stated_duration_hours2.includes('s')) {
                var time = 's';
            }
            if (stated_duration_hours2.includes('m')) {
                var time = 'm';
            }
            if (stated_duration_hours2.includes('h')) {
                var time = 'h';
            }
            if (stated_duration_hours2.includes('d')) {
                var time = 'd';
            }
            const stated_duration_hours3 = stated_duration_hours2.replace(time, '');
            if (stated_duration_hours3 === '0') {
                message.channel.send('Wartosc czasu musi wynosic conajmniej 1.');
            }
            if (isNaN(stated_duration_hours3)) {
                message.channel.send('Czas musi zostac podany w odpowiedniej jednostce.');
            }
            if (stated_duration_hours3 < 1) {
                var time3 = 's';
            }
            if (time === 's') {
                var actual_duration_hours = stated_duration_hours3 * 1000;
                var time2 = 'sekund';
            }
            if (time === 'm') {
                var actual_duration_hours = stated_duration_hours3 * 60000;
                var time2 = 'minut';
            }
            if (time === 'h') {
                var actual_duration_hours = stated_duration_hours3 * 3600000;
                var time2 = 'godzin';
            }
            if (time === 'd') {
                var actual_duration_hours = stated_duration_hours3 * 86400000;
                var time2 = 'dzien';
            }
            if (!isNaN(stated_duration_hours3)) {
                const prize = message.content.split(' ').slice(2).join(' ');
                if (prize === '') return message.channel.send('Napisz nagrode.');
                if (stated_duration_hours3 !== '0') {
                    const embed = new Discord.MessageEmbed()
                    .setAuthor('🎉 GIVEAWAY! 🎉')
                    .setTitle(`${prize}`)
                    .setColor('#000000')
                    .setDescription(`Kliknij w 🎉 aby wziasc udział!\nCzas: **${stated_duration_hours3}** ${time2}${time3}\nStworzony przez: ${message.author}`)
                    .setTimestamp(Date.now() + (actual_duration_hours))
                    .setFooter('Konczy sie o')
                    let msg = await message.channel.send(embed)
                    await msg.react('🎉')
                    setTimeout(() => {
                        msg.reactions.cache.get('🎉').users.remove(client.user.id)
                        setTimeout(() => {
                            let winner = msg.reactions.cache.get('🎉').users.cache.random();
                            if (msg.reactions.cache.get('🎉').users.cache.size < 1) {
                                const winner_embed = new Discord.MessageEmbed()
                                .setAuthor('🎉 GIVEAWAY ZAKONCZONY 🎉')
                                .setTitle(`${prize}`)
                                .setColor('#000000')
                                .setDescription(`Wygral/a:\nNikt nie wzial udzialu w giveaway'u.\nStworzony przez: ${message.author}`)
                                .setTimestamp()
                                .setFooter('Skonczony o')
                                msg.edit(winner_embed);
                            }
                            if (!msg.reactions.cache.get('🎉').users.cache.size < 1) {
                                const winner_embed = new Discord.MessageEmbed()
                                .setAuthor('🎉 GIVEAWAY ZAKONCZONY 🎉')
                                .setTitle(`${prize}`)
                                .setColor('#000000')
                                .setDescription(`Wygral/a:\n${winner}\nStworzony przez: ${message.author}`)
                                .setTimestamp()
                                .setFooter('Skonczony o')
                                msg.edit(winner_embed);
                                message.channel.send(`Giveaway zakonczony, wygral: ${winner}`)
                            }
                        }, 1000);
                    }, actual_duration_hours);
                }
            }
        }
        const guild = client.guilds.cache.get('813728700083339274');
        const channel = message.guild.channels.cache.get('814097618941771817');
        let log = new MessageEmbed()
        .setAuthor("Log! (/giveaway)")
        .setDescription(`${message.member} stworzyl nowy giveaway na kanale ${message.channel}!`)
        .setColor("#FF0000")
        .setTimestamp();
        channel.send(log);
    }
}
