module.exports = {
    name: `secours`,
    description: `Invitation au serveur d'aide`,
    execute(client, message, args) { 

        const Discord = require('discord.js');

//Dans l'embed.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Invitation au serveur d aide.')
    .setURL('https://discord.com/invite/M4GCSQWT9m')
    .setDescription('L invitation au serveur d aide et d idée du bot.')
    .addFields(
        { name: 'si le titre clicable ne marche pas ?', value: 'voici le lien https://discord.com/invite/M4GCSQWT9m' },
        { name: 'ou que vous êtes sur téléphone ?', value: 'voici le lien https://discord.com/invite/M4GCSQWT9m' },
        )
    .setTimestamp()
    .setFooter('Amusez-vous bien^^', 'https://cdn.discordapp.com/avatars/559081819920662538/08d5db049d31dd414f6315de81814f5e.webp');

    message.channel.send(exampleEmbed);
    
    }};