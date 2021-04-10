module.exports = {
    name: 'reload',
    category: 'Dev',
    aliases: ['restart', 'rl'],
    cooldown: 0,
    usage: `reload <category> <command>`,
    description: 'Reloads a command',
    async execute(client, message, args, user, text, prefix) {
        if(message.author.id !== '699551960231051304') return message.channel.send('Ale że co?');//Add your id there so that only you can run this command.
        if(!args[1]) return message.channel.send('Podaj nazwę komendy!');

        let command = message.content.split(`/reload `).join ("");
        try {
            delete require.cache[require.resolve(`../commands/${command}.js`)]//Change the path depending on how are your folders located.
            client.commands.delete(command);
            const pull = require(`../commands/${command}.js`);
            client.commands.set(command, pull);

            return message.channel.send(`Komenda **\`${command}\`** została przeładowana!`);
        } catch (error) {
          console.log(error);
            return message.channel.send(`Wystąpił problem przy próbie przeładowania komendy **\`${command}\`**: \`${error.message}\``);
        }
    }
}