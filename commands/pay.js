const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    name: 'pay',
    cooldown: 10,
    description: 'Przelewa pieniadze!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Oznacz kogoś komu chcesz przelać Funny Coiny`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Określ ile Funny Coinów chcesz przelać`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Nie możesz przelać minusowej kwoty`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Nie posiadasz tyle Funny Coinów`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> Przelałeś ${user.user.username} ${args[1]} Funny Coinów`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])
    }
}
