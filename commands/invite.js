module.exports = {
    name: `invite`,
    description: `Invitation du bot`,
    execute(client, message, args) { 

        const Discord = require('discord.js');

//Dans l'embed.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Invitation du bot')
    .setURL('https://discord.com/oauth2/authorize?client_id=736981928518877267&scope=bot&permissions=2146958847')
    .setDescription('Pour inviter le bot à un serveur.')

    message.channel.send(exampleEmbed);
    
    }};