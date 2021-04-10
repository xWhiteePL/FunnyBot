module.exports = {
    name: 'removeall',
    description: 'Zabiera kazdemu role!',
    execute(client, message, cmd, args, Discord) {
      // find the role with the name "Community"
              if(!message.member.hasPermission("ADMINISTRATOR")){
            message.channel.send("Nie masz uprawnień by użyć tą komendę!");
        }
let roletg = message.content.split(`/addall `).join ("");
let role = message.guild.roles.cache.find(role => role.name === 'Veryficated')

// if role doesn't exist, notify the author of command that the role couldn't be found
if (!role) return message.channel.send(`**${message.author.username}**, role not found  (Dev = ${roletg}, ${role})`)

// find all guild members that aren't bots, and add the "Community" role to each
message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.remove(role))

// notify the author of the command that the role was successfully added to all members
message.channel.send(`**${message.author.username}**, role **${role.name}** was removed to all members`)
    }
}