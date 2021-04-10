const { get } = require('axios');
module.exports = {
    name: 'pussy',
    cooldown: 3,
    description: "Nsfw!",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) {
		try {
			get('https://nekobot.xyz/api/image?type=pussy')
				.then(res => {
					const embed = new Discord.MessageEmbed()
            .setTitle(`Pussy`)
						.setImage(res.data.message)
            .setFooter('FunnyDiscord')
            .setTimestamp();
					message.author.send(embed);
          message.delete();
				});
		} catch (err) {
      console.log(err);
    }
    }
}