module.exports = {
    name: `play`,
    description: `Play requested sound.`,
    async execute(client, message, args) {
        if (!message.guild) return;

        if (message.member.voice.channel) {
            const ytdl = require('ytdl-core');
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play(ytdl(args [0]), {
                volume: 0.5,
              });
             
              dispatcher.on('start', () => {
                  message.client.user.setActivity('YouTube', { type: 'LISTENING' })
              })

              dispatcher.on('error', () => {
                message.reply("Je n'ai pas réussi à lire cette vidéo , réessayer et si le problème persiste , cela veut dire que la vidéo n'existe pas !");
                dispatcher.detroy();
                message.member.voice.channel.leave();
            })

              dispatcher.on('finish', () => {
                dispatcher.detroy();
                message.member.voice.channel.leave();
            })
          } 
          else {
            message.reply('Tu dois rejoindre un salon vocal en premier lieu !');
          }
    }
};