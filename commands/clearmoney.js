const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    name: 'clearmoney',
    aliases: ['cmoney', 'cm'],
    cooldown: 0,
    description: 'Czysci stan konta!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
          let ownerID = 'Your ID'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Usunięto ${args[1]} Funny Coinów\n\nAktualny stan konta: ${bal}`);
    message.channel.send(moneyEmbed)
    }
}