module.exports = {
    name: 'wzor',
    description: "Wzor na rekrutacje!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
      if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Nie posiadasz uprawnień do tej komendy');
      const rola = args.join(' ');
      if (!rola) return message.channel.send('Nie podałeś roli');
      if (args[0] == 'manager') {
        let embed = new MessageEmbed()
        .setAuthor('Rekrutacja Manager:')
        .addField('Etapy:', '1. Rekrutacja pisemna')
        .addField('Korzyści:', 'Unikalna rola managera, możliwość wysyłania swojej reklamy co jakiś czas, z czasem awanse na wyższe rangi')
        .addField('Pytania:', '1. Wiek\n2. Krótki opis siebie i swoich zainteresowań\n3. Dlaczego chciałbyś zostać managerem')
        .addField('Wymanagania', 'Aktywność, dobra ortografia')
        .setColor('#37fcc0')
        .setFooter('Rekrutacja, FunnyDiscord');
        message.delete();
        message.channel.send(embed);
      } else if (args[0] == 'mod') {
        let embed = new MessageEmbed()
        .setAuthor('Rekrutacja ChatMod+:')
        .addField('Etapy:', '1. Rekrutacja pisemna\n2. Rozmowa głosowa\n3. Okres próbny (1d-1w)\n4. Przejście dalej')
        .addField('Korzyści:', 'Unikalna rola, dostęp do kanału administracyjnego, możliwość organizowania eventów i giveawayów, z czasem awanse na wyższe rangi')
        .addField('Pytania:', '1. Wiek\n2. Opis siebie, swoich zainteresowań\n3. Czas / tydz\n4. Znajomość discorda/doświadczenie w pełnieniu tego typu roli\n Dlaczego ty a nie ktoś inny')
        .addField('Wymanagania', 'Aktywność, dobra ortografia, wiek 14+, mutacja, bycie ogarniętym')
        .setColor('#66e56a')
        .setFooter('Rekrutacja, FunnyDiscord');
        message.delete();
        message.channel.send(embed);
      } else message.channel.send(`Nie posiadamy takiej roli w naszej bazie danych! (Dostępne role: \`manager\`, \`mod\`)`);

    }
}