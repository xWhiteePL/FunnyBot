module.exports = async (client) => {
	console.log('Jestem gotowy!');
	await client.user.setActivity("Funny Discord, / - token", {
		type: "WATCHING",//can be LISTENING, WATCHING, PLAYING, STREAMING
	  });
};