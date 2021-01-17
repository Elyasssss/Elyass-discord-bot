module.exports = {
    name: `server`,
    description: `Server informations.`,
    execute(client, message, args) {
        message.channel.send(`:desktop:Nom du server : ${message.guild.name}.\n:detective:Nombre d'utilisateurs : ${message.guild.memberCount}.`);
    }
};