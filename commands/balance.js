const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
    name: 'balance',
    aliases: ['bal', 'money'],
    cooldown: 10,
    description: 'Wyswietla stan konta!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Konto ${user.username.tag}**\n\nPortfel: ${bal}\nBank: ${bank}`);
  message.channel.send(moneyEmbed)
    }
};