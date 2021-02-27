const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const { Client } = require("discord.js");
const keepAlive = require('./server.js');
const mongoose = require('mongoose');


 
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

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '𝚄𝚜𝚎𝚛');
    let welcomeRole2 = guildMember.guild.roles.cache.find(role => role.name === '‐‐‐‐ = [ ʀᴇᴀᴄᴛɪᴏɴ ʀᴏʟᴇ ] = ‐‐‐‐');
    let welcomeRole3 = guildMember.guild.roles.cache.find(role => role.name === '‐‐‐‐‐‐‐‐‐‐ = [ ʀᴀɴᴋ ] = ‐‐‐‐‐‐‐‐‐‐');
 
    guildMember.roles.add(welcomeRole);
    guildMember.roles.add(welcomeRole2);
    guildMember.roles.add(welcomeRole3);
    guildMember.guild.channels.cache.get('814434177717370900').send(`Siema <@${guildMember.user.id}>! Pamietaj o sprawdzeniu regulaminu!`);
});


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