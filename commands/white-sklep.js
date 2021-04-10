module.exports = {
    name: 'white-sklep',
    description: "Wysyła sklep",
    async execute(client, message, cmd, args, Discord, MessageEmbed, prefix) { 
      if(message.author.id !== '699551960231051304') return message.channel.send('Co ty próbujesz powiedz mi!');
      message.delete();
      let embed = new MessageEmbed()
      .setTitle(`Sklep xWhit3e`)
      .setDescription(`**Szukasz może dopracowanego autorskiego bota? Lub może jesteś zainteresowany profesjonalnym logiem lub pakietem emotek na swój serwer?\nJeśli tak to przeczytaj co ci mogę zaoferować!**\n`)
      .addField(`Boty:`, `- Niską cenę\n- Niezawodność\n- W pełni nowy bot, przystosowany do danego serwera\n- Dowolny wybór komend, kolorów, typów wiadomości i wszystko co zapragniesz\n- Połączenie z bazą danych\n- Darmowy hosting\n- Udostępnienie kodu źródłowego właścicielowi\n- Zaawansowany command i event handler\n- Wysoką wydajność`)
      .addField(`Loga:`, `- Profesjonalizm\n- Krótki czas oczekiwania\n- Wybór kompozycji, schematu kolorów przez kupującego\n- Możliwość przeskalowania do wybranej rozdzielczości`)
      .addField(`Emotki:`, `- Dostarczenie do 12h\n- Dobrą jakość\n- Niską cenę`)
      .setColor("#970cb0")
      .setFooter(`Jeśli jesteś zainteresowany pisz do ${message.author.tag}`);
      message.channel.send(embed);
    }
}