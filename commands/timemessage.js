module.exports = {
    name: `chrono`,
    description: `fait une boucle`,
    execute(client, message, args) {
      client.intervals.push(setInterval(() => message.channel.send("et hop +1 minute"), 1 * 60000));
    }
};