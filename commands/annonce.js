module.exports = {
    name: `annonce`,
    description: `dis l'annonce ci-dessous`,
    execute(client, message, args) { 

        const Discord = require('discord.js');

//Dans l'embed.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Annonce sans @')
	.setAuthor('Elyass Bot', 'https://cdn.discordapp.com/avatars/736981928518877267/b52c6cdaf6454854e6d3e50ded050dc9.png')
	.setDescription('·Je tenais à vous prévenir que je serais en maintenance pendant un petit moment ! \n ·Mon créateur à décidé de me modifier un peu afin de rajouter quelques améliorations ect...')
        .addFields(
		{ name: 'Voici quelques avant goûts', value: 'Vous êtes prêts ?' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Un bot 24h/24 !', value: 'Et 7j/7 !', inline: true },
		{ name: 'Des commandes supplémentaires !', value: 'mais avec des embeds !', inline: true },
	)
        .addField('Et je vous souhaite donc...', 'Une bonne soirée à tous ! :D', true)
	.setThumbnail('https://cdn.discordapp.com/avatars/559081819920662538/08d5db049d31dd414f6315de81814f5e.webp')
	.setImage('https://cdn.discordapp.com/attachments/760830394555170847/800769586412257280/unknown.png')
	.setTimestamp()
        .setFooter('Amusez-vous bien^^', 'https://cdn.discordapp.com/avatars/559081819920662538/08d5db049d31dd414f6315de81814f5e.webp');

    message.channel.send(exampleEmbed);
    
    }};
