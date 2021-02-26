module.exports = {
    name: 'yt',
    aliases: 'youtube',
    cooldown: 3,
    description: "Kanal yt wlasciciela!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        message.channel.send('https://www.youtube.com/user/xWhitee_');
        message.delete();
    }
}