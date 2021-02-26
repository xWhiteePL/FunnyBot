const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
 
const fs = require('fs');
const { CommandoClient } = require('discord.js-commando');

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '𝚄𝚜𝚎𝚛');
    let welcomeRole2 = guildMember.guild.roles.cache.find(role => role.name === '‐‐‐‐ = [ ʀᴇᴀᴄᴛɪᴏɴ ʀᴏʟᴇ ] = ‐‐‐‐');
    let welcomeRole3 = guildMember.guild.roles.cache.find(role => role.name === '‐‐‐‐‐‐‐‐‐‐ = [ ʀᴀɴᴋ ] = ‐‐‐‐‐‐‐‐‐‐');
 
    guildMember.roles.add(welcomeRole);
    guildMember.roles.add(welcomeRole2);
    guildMember.roles.add(welcomeRole3);
    guildMember.guild.channels.cache.get('814434177717370900').send(`Siema <@${guildMember.user.id}>! Pamietaj o sprawdzeniu regulaminu!`)
});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.DISCORD_TOKEN);