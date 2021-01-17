module.exports = {
    name: `stop`,
    description: `arrête les commandes`,
    execute(client, message, args) {
      client.intervals.forEach(i => clearInterval(i));
      client.intervals = [];
    }
  };