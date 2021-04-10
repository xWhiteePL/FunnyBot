module.exports = {
    name: 'rekrutacja',
    description: "Wlacza lub wylacza rekrutacje!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) { 
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Nie posiadasz uprawnień');
      if (args[0] == "on") {
        if (args[1] == 'manager') {
        let embed = new MessageEmbed()
        .setTitle('Rekrutacja')
        .setDescription(`Status: ON`)
        .addField(`Na role:`, `Manager`)
        .addField(`Informacje:`, `Aby wysłać podanie otwórz ticket z tematem 'rekrutacja'\nPo otwarciu wyślij na nim wiadomość stosując się do wybranego wzoru!\nJeśli nie spełniasz wymagań nie marnuj naszego czasu!`)
        .setFooter('Rekrutacja otwarta')
        .setColor('#37fcc0')
        .setTimestamp();
        message.channel.send(embed);
        message.channel.send('@everyone').then(m => m.delete({ timeout:1000 }));
        } else if (args[1] == 'chatmod') {
          let embed = new MessageEmbed()
        .setTitle('Rekrutacja')
        .setDescription(`Status: ON`)
        .addField(`Na role:`, `ChatMod`)
        .addField(`Informacje:`, `Aby wysłać podanie otwórz ticket z tematem 'rekrutacja'\nPo otwarciu wyślij na nim wiadomość stosując się do wybranego wzoru!\nJeśli nie spełniasz wymagań nie marnuj naszego czasu!`)
        .setFooter('Rekrutacja otwarta')
        .setColor('#66e56a')
        .setTimestamp();
        message.channel.send(embed);
        message.channel.send('@everyone').then(m => m.delete({ timeout:1000 }));
        } else if (args[1] == 'all') {
          let embed = new MessageEmbed()
        .setTitle('Rekrutacja')
        .setDescription(`Status: ON`)
        .addField(`Na role:`, `ChatMod, Manager`)
        .addField(`Informacje:`, `Aby wysłać podanie otwórz ticket z tematem 'rekrutacja'\nPo otwarciu wyślij na nim wiadomość stosując się do wybranego wzoru!\nJeśli nie spełniasz wymagań nie marnuj naszego czasu!`)
        .setFooter('Rekrutacja otwarta')
        .setColor('#66e56a')
        .setTimestamp();
        message.channel.send(embed);
        message.channel.send('@everyone').then(m => m.delete({ timeout:1000 }));
        } else message.channel.send('Podaj na co mam otworzyć rekrutację!')
      } else if (args[0] == "off") {
        let embed = new MessageEmbed()
        .setTitle('Rekrutacja')
        .setDescription(`Status: OFF`)
        .setFooter('Rekrutacja zamknięta')
        .setColor('#FF0000')
        .setTimestamp();
        message.channel.send(embed);
        message.channel.send('@everyone').then(m => m.delete({ timeout:1000 }));

      } else message.channel.send('Argument nie rozpoznany')


    }
}