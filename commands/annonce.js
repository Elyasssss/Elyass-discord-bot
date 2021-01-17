module.exports = {
    name: `annonce`,
    description: `dis l'annonce ci-dessous`,
    execute(client, message, args) { 

        const Discord = require('discord.js');

//Dans l'embed.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Annonce')
    .setDescription('Bonsoir , je vous annonce une nouvelle , mon créateur ma donner une nouvelle commande^^ c est la commande : .chrono , avec vous pouvez démarez un chronomètre de 1 minute , vous pouvez l arrêter avec .stop ; à bientôt !')
    .setTimestamp()
    .setFooter('Amusez-vous bien^^', 'https://cdn.discordapp.com/avatars/559081819920662538/08d5db049d31dd414f6315de81814f5e.webp');

    message.channel.send(exampleEmbed);
    
    }};