const figlet = require('figlet');
module.exports = {
    name: 'ascii',
    cooldown: 0,
    aliases: 'asc',
    description: 'Tworzy tekst ascii!',
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
          if(!message.member.hasPermission("MANAGE_MESSAGES")){
        return message.channel.send("Nie masz uprawnień by użyć tą komendę!");
          }
         if(!args[0]) return message.channel.send('Podaj jakiś tekst');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Coś poszło nie tak');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Podaj tekst krótszy niż 2000 znaków')

            message.channel.send('```' + data + '```')
        })
    }
}