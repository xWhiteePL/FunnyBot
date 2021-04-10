module.exports = {
    name: 'clear',
    alises: ['c', 'purge'],
    cooldown: 0,
    description: "Usuwa dana liczbe wiadomosci!",
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send("Nie masz uprawnień by użyć tą komendę!");
        }
        if(!args[0]) return message.reply('Podaj liczbę wiadomości do usunięcia!');
        if(isNaN(args[0])) return message.reply('Uzyj cyfr!');

        if(args[0] > 100) return message.reply('Możesz usunąć maksymalnie 100 wiadomości na raz!');
        if(args[0] < 1) return message.reply('Podaj liczbę większą niż 0');
        message.channel.bulkDelete(args[0]);
        message.delete();
    }
}