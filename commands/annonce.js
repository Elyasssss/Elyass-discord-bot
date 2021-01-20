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
	.setDescription('·Je reviens en force !\n ·Je suis actuellement en ligne h24 ! Les commandes pourront donc ce faire à tout moment de la journée^^ \n Profitez bien ! ')
        .setThumbnail('https://cdn.discordapp.com/avatars/559081819920662538/08d5db049d31dd414f6315de81814f5e.webp')
	.addFields(
		{ name: 'je reviens donc', value: 'Avec pleins de nouveautés !' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Je serai donc un bot 24h/24 !', value: 'Et 7j/7 !', inline: true },
	)
	.addField('Et je vous souhaite donc...', 'Une bonne soirée à tous ! :D', true)
	.setImage('https://cdn.discordapp.com/attachments/798882442336534588/801429145178996776/unknown.png')
	.setTimestamp()
	.setFooter('Amusez-vous bien^^', 'https://cdn.discordapp.com/avatars/559081819920662538/08d5db049d31dd414f6315de81814f5e.webp');
    
    message.channel.send(exampleEmbed);

    }};
