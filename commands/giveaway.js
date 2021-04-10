const ms = require('ms');

module.exports = {
    name: 'giveaway',
    description: 'Tworzy giveaway!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Nie masz uprawnień do wykonania tej komendy.');
    }

    // Giveaway channel
    let giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        return message.channel.send(':x: Oznacz kanał!!');
    }

    // Giveaway duration
    let giveawayDuration = args[1];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: Podaj prawidłowy czas!');
    }

    // Number of winners
    let giveawayNumberWinners = args[2];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: Podaj prawidłową liczbę wygranych!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(3).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: Podaj właściwą nagrodę!');
    }

    // Start the giveaway
    client.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
        // Who hosts this giveaway
        hostedBy: client.config.hostedBy ? message.author : null,
        // Messages
        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+"🎉 **GIVEAWAY** 🎉",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+"🎉 **GIVEAWAY ZAKOŃCZONY** 🎉",
            timeRemaining: "Pozostało: **{duration}**!",
            inviteToParticipate: "Zareaguj 🎉 by wziąć udział!",
            winMessage: "Gratuluję, {winners}! Wygrałeś/wygraliście **{prize}**!",
            embedFooter: "Giveaway",
            noWinner: "Giveaway anulowany, nikt nie wziął udziału.",
            hostedBy: "Stworzony przez: {user}",
            winners: "wygrywa:",
            endedAt: "Zakończony o:",
            units: {
                seconds: "sekund(y)",
                minutes: "minut(y)",
                hours: "godzin(y)",
                days: "dzień(dni)",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`Giveaway uruchomiony na: ${giveawayChannel}!`);
    }

};