module.exports = {
    name: 'slowmode',
    cooldown: 3,
    description: "Wlacza slowmode na kanale",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) { 
let index = 1;
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
if (!channel) {
  channel = message.channel;
  index--;
}

// Check type and viewable
if (channel.type != 'text' || !channel.viewable) return message.channel.send('Oznacz lub podaj id kanału.')
  
const rate = args[index];
if (!rate || rate < 0 || rate > 120) return message.channel.send('Podaj czas od 1 do 120 sekund.')

// Check channel permissions
if (!channel.permissionsFor(message.guild.me).has(['MANAGE_CHANNELS']))
  return this.sendErrorMessage(message, 0, 'Nie mam permisji by zmienic cooldown na tym kanale.');

let reason = args.slice(index + 1).join(' ');
if (!reason) reason = '`Nie podano`';
if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

await channel.setRateLimitPerUser(rate, reason); // set channel rate
const status = (channel.rateLimitPerUser) ? 'ON' : 'OFF';
const embed = new MessageEmbed()
  .setTitle('Slowmode')
  .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()
  .setColor(message.guild.me.displayHexColor);

// Slowmode disabled
if (rate === '0') {
  message.channel.send(embed
    .setDescription(`\`${status}\` ➔ \`OFF\``)
    .addField('Moderator', message.member, true)
    .addField('Kanał', channel, true)
    .addField('Powód', reason)
  );

  // Slowmode enabled
} else {

  message.channel.send(embed
    .setDescription(`\`${status}\` ➔ \`ON\``)
    .addField('Moderator', message.member, true)
    .addField('Kanał', channel, true)
    .addField('Czas', `\`${rate}\``, true)
    .addField('Powód', reason)
  );
  message.delete();
  const guild = client.guilds.cache.get('813728700083339274');
  const channell = message.guild.channels.cache.get('814097618941771817');
  let log = new MessageEmbed()
  .setAuthor("Log!")
  .setDescription(`${message.member} wlaczyl slowmode na kanale ${message.channel}`)
  .addField(`Z opóźnieniem`, `\`${rate}s\``)
  .setColor("#FF0000")
  .setTimestamp();
  channell.send(log);
}
}
};