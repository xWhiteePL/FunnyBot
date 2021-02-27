module.exports = {
    name: 'help',
    alises: 'pomoc',
    cooldown: 3,
    description: "Krotkie info na temat komend!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        const embed = new MessageEmbed()
        .setAuthor('Spis komend')
        .addField('/avatar [uzytkownik]', 'Komenda ta sluzy do wyswietlenia avataru danego uzytkownika.')
        .addField('/blad [temat w 1 slowie] [tresc]', 'Ta komenda sluzy do zgloszenia bledu')
        .addField('/info [uzytkownik]', 'Pokazuje informacje na temat uzytkownika')
        .addField('/ping', 'Tej komendy chyba nie trzeba opisywac')
        .addField('/serverinfo', 'Komenda pokazujaca informacje na temat servera')
        .addField('/suggestion [tresc]', 'Ta komenda wysyla propozycje na kanal z propozycjami')
        .addField('/ticket open [temat]', 'Otwiera ticket, wiecej o ticketach zobaczysz na kanale ticket!')
        .addField('/yt', 'Wysyla najlepszy kanal na YouTube w polsce')
        .setTimestamp();
        message.member.send(embed);
        message.delete();
    }
}