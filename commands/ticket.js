const ms = require('ms');
const moment = require('moment');
module.exports = {
    name: 'ticket',
    aliases: ['tick'],
    cooldown: 1,
    description: 'Tworzy propozycje!',
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
		if (!args[0]) {
			// Show available ticket sub-commands
			const embed = new MessageEmbed()
				.setTitle('Pomoc ticketu')
				.setDescription(`\`/ticket <create|open> [powód]\` - otwiera ticket do administracji.\n\`/ticket close\` - zamyka ticket (Admin).\n\`/ticket setup\` - konfiguruje ticket.`);
			message.channel.send(embed);
		} else if (args[0] == 'create' || args[0] == 'open') {

			// make sure ticket has been set-up properly
			const supportRole = message.guild.roles.cache.find(role => role.id == '814786736881270805');
			if (!supportRole) return message.channel.send(settings.Language, 'Rola administracji ticketu nie istenieje').then(m => m.delete({ timeout: 10000 }));
            message.delete();

			// get reason
			const reason = (args.join(' ').slice(args[1].length)) ? args.join(' ').slice(args[1].length) : message.channel.send('Brak');

			// create channel
			message.guild.channels.create(`ticket-${message.author.username}`, 'text').then(channel => {
				// get everyone role
				const everyoneRole = message.guild.roles.cache.find(role => role.name == '@everyone');
				// Category ID - Optional
				try {
					// update permissions so only user and support role can see this
					channel.updateOverwrite(message.author, {
						SEND_MESSAGES: true,
						READ_MESSAGES: true,
						VIEW_CHANNEL: true,
					});
					channel.updateOverwrite(supportRole, {
						SEND_MESSAGES: true,
						READ_MESSAGES: true,
                        VIEW_CHANNEL: true,
					});
					channel.updateOverwrite(everyoneRole, {
						SEND_MESSAGES: false,
						READ_MESSAGES: false,
                        VIEW_CHANNEL: false,
					});
				} catch (e) {
					console.log(e);
				}
				// reply to user saying that channel has been created
				const successEmbed = new MessageEmbed()
					.setTitle('✅ Sukces!')
					.setDescription(`Twój ticket zostal stworzony: ${channel}`);
				message.channel.send(successEmbed).then(m => m.delete({ timeout:10000 }));
                message.delete();
                const guild = client.guilds.cache.get('813728700083339274');
                const logchannel = message.guild.channels.cache.get('814097618941771817');
                let log = new MessageEmbed()
                .setAuthor("Log! (Ticket)")
                .setDescription(`${message.member} otworzył nowy ticket!`)
                .addField(`Temat ticketu`, `\`${reason}\``)
                .setColor("#FF0000")
                .setTimestamp();
                logchannel.send(log);

				// Add message to ticket channel
				const embed = new MessageEmbed()
					.setColor(0xFF5555)
					.addField(`Hej ${message.author.username}!`, 'Administracja odpowie ci na twój ticket tak szybko jak to możliwe.')
					.addField('Temat ticketu', reason)
					.setTimestamp();
				channel.send(embed);
				channel.send(`${message.author}`).then(m => m.delete({ timeout:1000 }));


			})
		} else if (args[0] == 'close') {
			// will close the current ticket channel
			// get support role
			try {
				if (message.member.roles.cache.has(r => r.id == TicketSupportRole), message.member.permissionsIn(message.channel).has('MANAGE_CHANNELS')) {
                    const logchannel1 = message.guild.channels.cache.get('814097618941771817');
                    let log = new MessageEmbed()
                    .setAuthor("Log! (Ticket)")
                    .setDescription(`${message.member} zaknął ticket!`)
                    .addField(`Nazwa ticketu`, `\`${message.channel.name}\``)
                    .setColor("#FF0000")
                    .setTimestamp();
                    logchannel1.send(log);
                    message.channel.delete();
				} else {
					return;
				}
			} catch (e) {
				console.log(e);
			}
    }
    }
}