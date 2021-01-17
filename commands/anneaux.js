module.exports = {
    name: `anneaux`,
    description: `Test Command`,
    execute(client, message, args) {

        if (message.channel.type === "dm") return message.channel.send("Désolé , mais tu ne peux pas faire cette commande via les messages privés , pas d'utilité... :yawning_face: !");

        function random(min, max){
            min = Math.ceil(1);
            max = Math.floor(3);
            randnum = Math.floor(Math.random() * (max - min +1)+ min);
        }
        
        
        if (message.content === `.anneaux`) {
            random()
            if (randnum ==1){
                message.reply("Vous avez tirez vers l'anneaux du millieu !");
                console.log(randnum);
            }
         
            if (randnum ==2){
                message.reply("Vous avez tiré vers l'anneaux de gauche !");
                console.log(randnum);
            }
        
            if (randnum ==3){
                message.reply("Vous avez tiré vers l'anneaux de droite !");
                console.log(randnum);
            }
    }
}};