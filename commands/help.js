module.exports = {
    name: `help`,
    description: `Commands List`,
    execute(client, message, args) {
        message.channel.send('•le prefix du bot (le bouton a mettre avant la commande) est le: .')
        message.channel.send('•.ping : Le bot enverra pong.')
        message.channel.send('•.avatar : il vous donnera le lien de votre photo de profil (pour la copier ect...) , et si vous mettez : .avatar @la personne que vous voulez  , vous aurez le lien de sa photo de profil.')
        message.channel.send('•.server : vous aurez les informations du serveur.')
        message.channel.send('•.purge : supprime les messages du salon dans lequel vous entrer la commande , il faudra écrire le nombre de messages à supprimé sans compter la commande , L ACTION EST IRREVERSIBLE ! ')
        message.channel.send('•.play : vous devrez être dans un salon vocal , puis , vous enverrai : .play {https :// www.youtube.com/ L URL de la vidéo que vous voulez}. Ensuite il jouera le son de la vidéo.')
        message.channel.send('•.maison : vous donne une maison poudlard au hasard entre (poufsouffle , serpentard , serdaigle  , gryffondor).')
        message.channel.send('•N oublier pas que lorsque que j écris des {} ne les écrivez pas et les espaces dans le lien youtube , c est pour qu il ne s affiche pas.')
        
    }
};