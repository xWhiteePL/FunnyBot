const ms = require('ms');
const moment = require('moment');
module.exports = {
    name: 'ticket',
    aliases: ['tick'],
    cooldown: 1,
    description: 'Tworzy propozycje!',
    execute(client, message, cmd, args, Discord, MessageEmbed, prefix){
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) {
			return message.channel.send( 'MISSING_PERMISSION', 'MANAGE_CHANNELS').then(m => m.delete({ timeout: 10000 }));
		}

		if (!args[0]) {
			// Show available ticket sub-commands
			const embed = new MessageEmbed()
				.setTitle('Pomoc ticketu')
				.setDescription(`\`/ticket <create|open> [powod]\` - otwiera ticket dla administracji.\n\`/ticket close\` - zamyka aktualny kanal ticketu (Admin).\n\`/ticket setup\` - konfiguruje komende ticketu.`);
			message.channel.send(embed);
		} else if (args[0] == 'create' || args[0] == 'open') {

			// make sure ticket has been set-up properly
			const supportRole = message.guild.roles.cache.find(role => role.id == '814786736881270805');
			if (!supportRole) return message.channel.send(settings.Language, 'Rola administracji ticketu nie istenieje').then(m => m.delete({ timeout: 10000 }));
            message.delete();

			// get reason
			const reason = (args.join(' ').slice(args[1].length)) ? args.join(' ').slice(args[1].length) : message.channel.send('Brak powodu');

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
					.setDescription(`Twoj ticket zostal stworzony: ${channel}`);
				message.channel.send(successEmbed).then(m => m.delete({ timeout:10000 }));
                message.delete();
                const guild = client.guilds.cache.get('813728700083339274');
                const logchannel = message.guild.channels.cache.get('814097618941771817');
                let log = new MessageEmbed()
                .setAuthor("Log!")
                .setDescription(`${message.member} otworzyl nowy ticket o temacie \`${reason}\``)
                .setColor("#FF0000")
                .setTimestamp();
                logchannel.send(log);

				// Add message to ticket channel
				const embed = new MessageEmbed()
					.setColor(0xFF5555)
					.addField(`Hej ${message.author.username}!`, 'Administracja odpowie ci na twoj ticket tak szybko jak to mozliwe.')
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
                    .setAuthor("Log!")
                    .setDescription(`${message.member} zaknal ticket o nazwie \`${message.channel.name}\`!`)
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
		} else if (args[0] == 'setup') {
			if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Nie posiadasz uprawnien do wykonania tej komendy').then(m => m.delete({ timeout: 10000 }));
			// will setup the ticket command
			if (!args[1]) {
				const embed = new MessageEmbed()
					.setTitle('Ustawienia ticketu')
					.setDescription(`\`/ticket setup category <ID kanalu>\` - Kategoria kanalow dla ticketu \n\`/ticket setup role <ID roli>\` - Wybor roli z uprawnieniami do ticketow`);
				message.channel.send(embed);
			} else if (args[1] == 'category') {
				try {
					const channel = bot.channels.cache.get(args[2]);
					console.log(channel);
					if (!channel || channel.type != 'category') return message.channel.send('To nie kategoria.');
					// update database
					bot.updateGuild(message.guild, { TicketCategory: args[2] });
					message.channel.send('Zaktualizowano kategorie');
				} catch (e) {
					console.log(e);
				}
			} else if (args[1] == 'role') {
				const supportRole = message.guild.roles.cache.find(role => role.id == args[2]);
				if (!supportRole) return message.channel.send('To nie jest rola.');
				// update database
				bot.updateGuild(message.guild, { TicketSupportRole: args[2] });
				message.channel.send('Zaktualizowano role');
			} else {
				message.channel.send('Nie moge ci w tym pomoc');
			}
		} else {
			message.channel.send('Ta komenda nie istnieje.');
		}
	}

}