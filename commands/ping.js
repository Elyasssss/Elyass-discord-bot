module.exports = {
    name: `ping`,
    description: `Test Command`,
    execute(client, message, args) {
        message.channel.send(':ping_pong:Pong !');
    }
};