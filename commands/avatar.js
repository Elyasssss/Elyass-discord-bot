module.exports = {
    name: `avatar`,
    description: `Display avatar URL.`,
    execute(client, message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({dynamic:true})}`)  
          }
      
      const avatarList = message.mentions.users.map(user => {
          return `L'avatar de ${user.username} est : ${user.displayAvatarURL({dynamic:true})}`;
      });
      
      message.channel.send(avatarList);
    }
};