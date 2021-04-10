const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
module.exports = {
    name: 'sklep',
    aliases: 'shop',
    cooldown: 5,
    description: "Wysyła sklep",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) { 
      if (!args[0]) {
      let embed = new MessageEmbed()
      .setTitle('Sklep FunnyDiscord')
      .addField('Mnożnik 1.2x', 'Cena: 20 000FC, Numer: 1')
      .addField('Mnożnik 1.5x', 'Cena: 50 000FC, Numer: 2')
      .addField('Mnożnik 2.0x', 'Cena: 200 000FC, Numer 3')
      .addField('Biały kolor nicku', 'Cena: 10 000FC, Numer 4')
      .addField('Żółty kolor nicku', 'Cena: 10 000FC, Numer 5')
      .addField('Różowy kolor nicku', 'Cena: 10 000FC, Numer 6')
      .setColor('#FF0000')
      .setFooter('Aby zakupić wybrany przedmiot napisz /shop buy [numer]');
      message.channel.send(embed);
      } else if (args[0] == 'buy') {
        let user = message.author;
        const member = message.member;
      const idmember = member.id;
        if (!args[1]) return message.channel.send('Wybierz produkt ze sklepu!');
        if (args[1] == '1') {
    let author = db.fetch(`money_${message.guild.id}_${user.id}`);
    let levelrole = message.member.guild.roles.cache.find(role => role.name === 'Mnoznik1.2x');
    if (message.member.roles.cache.has(levelrole)) return message.channel.send('Posiadasz już te rolę!');
    if (author < 20000) return message.channel.send('Nie posiadasz wymaganych środków');
    db.subtract(`money_${message.guild.id}_${user.id}`, 20000);
    message.member.roles.add(levelrole);
    message.channel.send('Zakupiłeś \`Mnożnik 1.2x\`');
          
          } else if (args[1] == '2') {
                let author = db.fetch(`money_${message.guild.id}_${user.id}`);
    let levelrole = message.member.guild.roles.cache.find(role => role.name === 'Mnoznik1.5x');
    if (message.member.roles.cache.has(levelrole)) return message.channel.send('Posiadasz już te rolę!');
    if (author < 50000) return message.channel.send('Nie posiadasz wymaganych środków');
    db.subtract(`money_${message.guild.id}_${user.id}`, 50000);
    message.member.roles.add(levelrole);
    message.channel.send('Zakupiłeś \`Mnożnik 1.5x\`');
            

          } else if (args[1] == '3') {
                let author = db.fetch(`money_${message.guild.id}_${user.id}`);
    let levelrole = message.member.guild.roles.cache.find(role => role.name === 'Mnoznik2.0x');
    if (message.member.roles.cache.has(levelrole)) return message.channel.send('Posiadasz już te rolę!');
    if (author < 200000) return message.channel.send('Nie posiadasz wymaganych środków');
    db.subtract(`money_${message.guild.id}_${user.id}`, 200000);
    message.member.roles.add(levelrole);
    message.channel.send('Zakupiłeś \`Mnożnik 2.0x\`');

          } else if (args[1] == '4') {
                let author = db.fetch(`money_${message.guild.id}_${user.id}`);
    let levelrole = message.member.guild.roles.cache.find(role => role.name === 'Bialy');
    if (message.member.roles.cache.has(levelrole)) return message.channel.send('Posiadasz już te rolę!');
    if (author < 10000) return message.channel.send('Nie posiadasz wymaganych środków');
    db.subtract(`money_${message.guild.id}_${user.id}`, 10000);
    message.member.roles.add(levelrole);
    message.channel.send('Zakupiłeś \`Biały kolor nicku\`');

          } else if (args[1] == '5') {
                            let author = db.fetch(`money_${message.guild.id}_${user.id}`);
    let levelrole = message.member.guild.roles.cache.find(role => role.name === 'Zolty');
    if (message.member.roles.cache.has(levelrole)) return message.channel.send('Posiadasz już te rolę!');
    if (author < 10000) return message.channel.send('Nie posiadasz wymaganych środków');
    db.subtract(`money_${message.guild.id}_${user.id}`, 10000);
    message.member.roles.add(levelrole);
    message.channel.send('Zakupiłeś \`Żółty kolor nicku\`');

          } else if (args[1] == '6') {
                            let author = db.fetch(`money_${message.guild.id}_${user.id}`);
    let levelrole = message.member.guild.roles.cache.find(role => role.name === 'Rozowy');
    if (message.member.roles.cache.has(levelrole)) return message.channel.send('Posiadasz już te rolę!');
    if (author < 10000) return message.channel.send('Nie posiadasz wymaganych środków');
    db.subtract(`money_${message.guild.id}_${user.id}`, 10000);
    message.member.roles.add(levelrole);
    message.channel.send('Zakupiłeś \`Różowy kolor nicku\`');

          } else return message.channel.send(`Nieprawidłowy numer!!`);
        }
      }


    }