require('dotenv').config();
const fs = require('fs');
const cooldowns = new Map();
const { Client } = require("discord.js");
const Levels = require('discord-xp');
module.exports = (Discord, client, message) => {
  Levels.setURL("")
  client.on("message", async message => {
    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`${message.member} awansowales na ${user.level} poziom! Tak trzymaj!`);
        if (user.level === 10) {
          let levelrole = message.member.guild.roles.cache.find(role => role.name === '𝗟𝗲𝘃𝗲𝗹');
          message.member.roles.add(levelrole);
          message.member.send(`Otrzymales role za 10 poziom!`);
        }
    }
})
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) ||
        client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command){
      if(!cooldowns.has(command.name)){
      cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if (time_stamps.has(message.author.id)) {
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if (current_time < expiration_time) {
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`Poczekaj jeszcze ${time_left.toFixed(1)} sekund, by uzyc komendy ${command.name}`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);


    try {
        command.execute(client, message, cmd, args, Discord, Discord.MessageEmbed, prefix);
    } catch (err) {
        message.reply('Wystapil problem przy probie wykonania komendy.');
        console.log(err);
    }
}
}