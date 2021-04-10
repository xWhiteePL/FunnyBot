module.exports = {
    name: 'help',
    alises: 'pomoc',
    cooldown: 3,
    description: "Krotkie info na temat komend!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
      if(!message.member.hasPermission("MANAGE_MESSAGES" || "VIEW_AUDIT_LOG")){
        let embed = new MessageEmbed()
        .setTitle('Spis komend')
        .setDescription('Wymagany argument - \`~\`\n')
        .addField('Ekonomia:', '/pay ~[użytkownik] ~[ilość]: Przelewa pieniądze na czyjeś konto\n /balance [użytkownik]: Pokazuje aktualny stan konta\n/withdraw ~[ilość/all]: Wypłaca pieniądze z banku\n/deposit ~[ilość/all]: Przelewa pieniądze do banku\n/work: Praca pozwalająca zdobywać :FunnyCoin:\n/weekly: Otrzymujesz nagrodę tygodniową\n/daily: Otrzymujesz nagrodę codzienną\n')
        .addField('Użyteczne:', '/blad ~[temat w 1 słowie] ~[treść]: Zgłasza błąd do administracji\n/avatar [użytkownik]: Wyświetla avatar\n/info [użytkownik]: Pokazuje informacje na temat użytkownika\n/serverinfo: Komenda pokazująca informacje na temat serwera\n/ticket open ~[temat]: Otwiera ticket, więcej o ticketach zobaczysz na kanale #ticket!\n/suggestion ~[treść]: Wysyła propozycję na kanał z propozycjami\n')
        .addField('Poziom:', '/rank [użytkownik]: Pokazuje poziom i ilość XP\n/ranktop: Pokazuje top 5 osób w pisaniu\n')
        //.addField('NSFW (18+):', '/ass, /pussy, /anal, /pgif, /boobs')
        .addField('Dodatkowe:', '/ping: Tej komendy chyba nie trzeba opisywać\n/yt: Kanał yt właściciela!')
        .setFooter(`FunnyDiscord`)
        .setTimestamp();
        message.member.send(embed);
        message.delete();
      }
      if(message.member.hasPermission("MANAGE_MESSAGES" || "VIEW_AUDIT_LOG")){
        let embed = new MessageEmbed()
        .setTitle('Spis komend')
        .setDescription('Wymagany argument - \`~\`\n')
        .addField('Ekonomia:', '/pay ~[użytkownik] ~[ilość]: Przelewa pieniądze na czyjeś konto\n /balance [użytkownik]: Pokazuje aktualny stan konta\n/withdraw ~[ilość/all]: Wypłaca pieniądze z banku\n/deposit ~[ilość/all]: Przelewa pieniądze do banku\n/work: Praca pozwalająca zdobywać :FunnyCoin:\n/weekly: Otrzymujesz nagrodę tygodniową\n/daily: Otrzymujesz nagrodę codzienną\n')
        .addField('Użyteczne:', '/blad ~[temat w 1 słowie] ~[treść]: Zgłasza błąd do administracji\n/avatar [użytkownik]: Wyświetla avatar\n/info [użytkownik]: Pokazuje informacje na temat użytkownika\n/serverinfo: Komenda pokazująca informacje na temat serwera\n/ticket open ~[temat]: Otwiera ticket, więcej o ticketach zobaczysz na kanale #ticket!\n/suggestion ~[treść]: Wysyła propozycję na kanał z propozycjami\n')
        .addField('Poziom:', '/rank [użytkownik]: Pokazuje poziom i ilość XP\n/ranktop: Pokazuje top 5 osób w pisaniu\n')
        //.addField('NSFW (18+):', '/ass, /pussy, /anal, /pgif, /boobs')
        .addField('Dodatkowe:', '/ping: Tej komendy chyba nie trzeba opisywać\n/yt: Kanał yt właściciela!\n')
        .addField('Komendy Administracyjne:', '(Administrator) /addall: Nadaje każdemu rangę.\n(Administrator) /addxp ~[ilość]: Dodaje XP\n(Administrator) /ascii: Wyświetla text ascii\n(Ban_Members) /ban ~[Użytkownik] ~[Powód]: Banuje użytkownika z serwera\n(Manage_Messages) /mute ~[Użytkownik] ~[Czas] ~[Powód]: Wycisza użytkownika\n(Manage_Messages) /clear ~[Liczba]: Usuwa wiadomości\n(Manage_Messages)')
        .setFooter(`FunnyDiscord`)
        .setTimestamp();
        message.member.send(embed);
        message.delete();
    }
    }

}