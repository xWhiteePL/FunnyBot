module.exports = {
    name: 'greroll',
    aliases: ['grr'],
    description: 'Rerolluje giveaway!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
      // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Nie masz uprawnień do wykonania tej komendy.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Podaj prawidłowe id wiadomości!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('Nie znalazłem giveawaya do `'+ args.join(' ') +'`.');
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // Success message
        message.channel.send('Zwycięzca został wylosowany od nowa!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('Ten giveaway nie został zakończony!');
        } else {
            console.error(e);
            message.channel.send('Wystąpił problem...');
        }
    });


    }
}