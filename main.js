const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const { Client } = require("discord.js");
const keepAlive = require('./server.js');
const mongoose = require('mongoose');
const Levels = require('discord-xp');
const ms = require('ms');
const config = require('./config.json');
client.config = config;
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

Levels.setURL(process.env.MONGO_DB);
client.on("message", async message => {

  


  if (message.author.bot) return;
  const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  const user = await Levels.fetch(message.author.id, message.guild.id);
  let x = message.member.guild.roles.cache.find(role => role.name === 'Mnoznik1.2x');
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`${message.member} awansowałeś na ${user.level} poziom! Tak trzymaj!`);
            if (user.level === 10) {
          let levelrole = message.member.guild.roles.cache.find(role => role.name === '𝗟𝗲𝘃𝗲𝗹');
          if (message.member.roles.cache.has(levelrole)) return;
          message.member.roles.add(levelrole);
          message.member.send(`Otrzymałeś role za 10 poziom!`);
    }
    }
})

 
const fs = require('fs');
const { CommandoClient } = require('discord.js-commando');
client.on("ready", () => {
  let statuses = [
    'Prefix - /',
    'spis komend - /help',
    'chat na Funny Discord',
    'By xWhit3e',
    'Regulamin'
  ]

  setInterval(() => {
        const index = Math.floor(Math.random() * (statuses.length - 1) + 1);
        client.user.setActivity(statuses[index], { type: 'WATCHING' });
  }, 7000)
});

const shortcode = (n) => {
    const possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789'
    let text = ''
    for (var i = 0; i < n + 1; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text;
}

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '𝚄𝚜𝚎𝚛');
    let welcomeRole2 = guildMember.guild.roles.cache.find(role => role.name === '‐‐‐‐ = [ ʀᴇᴀᴄᴛɪᴏɴ ʀᴏʟᴇ ] = ‐‐‐‐');
 
    guildMember.roles.add(welcomeRole);
    guildMember.roles.add(welcomeRole2);
    guildMember.guild.channels.cache.get('814434177717370900').send(`Siema <@${guildMember.user.id}>! Pamietaj o sprawdzeniu regulaminu!`);
})

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(()=> {
    console.log('MongoDB jest online')
}).catch((err) => {
    console.log(err)
});
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

keepAlive();

client.login(process.env.DISCORD_TOKEN);