module.exports = {
    name: 'help',
    alises: 'pomoc',
    cooldown: 3,
    description: "Krotkie info na temat komend!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        message.channel.send('Spis komend zobaczysz na kanale Info Komendy!');
        message.delete();
    }
}