module.exports = {
    name: 'ping',
    cooldown: 3,
    description: "Klasyczna komenda ktorej nie moglo zabraknac!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        message.channel.send('Pong!');
    }
}