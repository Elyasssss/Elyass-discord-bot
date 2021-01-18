module.exports = {
    name: `annonce`,
    description: `dis l'annonce ci-dessous`,
    execute(client, message, args) { 

        const Discord = require('discord.js');

//Dans l'embed.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Annonce')
    .setDescription('Par exemple keyzen ,\n Je suis une annonce type^^')
    .setTimestamp()
    .setFooter('Amusez-vous bien^^', 'https://cdn.discordapp.com/avatars/559081819920662538/08d5db049d31dd414f6315de81814f5e.webp');

    message.channel.send(exampleEmbed);
    
    }};
