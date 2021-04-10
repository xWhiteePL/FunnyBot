module.exports = {
    name: 'say',
    cooldown: 1,
    description: "Pisze 'Botem'",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {  
                if (message.content.includes("@everyone") || (message.content.includes("@here"))) return;
         
                if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
        
                let textChannel = message.mentions.channels.first();
                if(!args[0]) return message.channel.send('Podaj kanał na który mam wysłać wiadomość!');
                if(!args[1]) return message.channel.send('Napisz wiadomość którą mam wysłać!');
                if (!message.guild.channels.cache.has(textChannel.id)) return;
                message.delete();
        
                    msg = args.slice(1).join(" ");
                    textChannel.send(msg);

                    const guild = client.guilds.cache.get('813728700083339274');
                    const channel = message.guild.channels.cache.get('814097618941771817');
                    let log = new MessageEmbed()
                    .setAuthor("Log! (/say)")
                    .setDescription(`${message.member} powiedział \`${msg}\` na kanale ${message.channel} za pomocą komendy /say!`)
                    .setColor("#FF0000")
                    .setTimestamp();
                    channel.send(log);
    }
}