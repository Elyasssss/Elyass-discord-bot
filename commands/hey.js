module.exports = {
    name: `bonjour`,
    description: `Salutation`,
    execute(client, message, args) {
        message.channel.send('Tu te sens seul ? dis bonjour aux membres (ils sont peut être actifs) je ne suis qu une IA ;-;');
    }
};