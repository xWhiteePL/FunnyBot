module.exports = {
    name: 'say',
    cooldown: 1,
    description: "Pisze 'Botem'",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {  
                if (message.content.includes("@everyone") || (message.content.includes("@here"))) return;
         
                if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
        
                let textChannel = message.mentions.channels.first();
                if(!args[0]) return message.channel.send('Podaj kanal na ktory mam wyslac wiadomosc!');
                if(!args[1]) return message.channel.send('Podaj wiadomosc ktora mam wyslac!');
                if (!message.guild.channels.cache.has(textChannel.id)) return;
                message.delete();
        
                    msg = args.slice(1).join(" ");
                    textChannel.send(msg);

                    const guild = client.guilds.cache.get('813728700083339274');
                    const channel = message.guild.channels.cache.get('814097618941771817');
                    let log = new MessageEmbed()
                    .setAuthor("Log! (/say)")
                    .setDescription(`${message.member} powiedzial \`${msg}\` za pomoca komendy /say!`)
                    .setColor("#FF0000")
                    .setTimestamp();
                    channel.send(log);
    }
}