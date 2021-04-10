module.exports = {
    name: 'ping',
    cooldown: 3,
    description: "Klasyczna komenda ktorej nie moglo zabraknac!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        message.reply('Oblicznie pingu...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp
      let embed = new MessageEmbed()
      .setTitle('Ping')
      .addField(`Opóźnienie bota:`, `${ping}ms`)
      .addField(`Opóźnienie api:`, `${client.ws.ping}ms`)
      .setFooter(`FunnyDiscord`)
      .setTimestamp();

      resultMessage.edit(embed)
        })
    }
}