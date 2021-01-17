module.exports = {
    name: `sort`,
    description: `décide si un sort touche ou non`,
    execute(client, message, args) {
   
        if (message.channel.type === "dm") return message.channel.send("Désolé , mais tu ne peux pas faire cette commande via les messages privés , pas d'utilité... :yawning_face: !");

function random(min, max){
    min = Math.ceil(1);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

if (message.content === `.sort`) {
    random()
    if (randnum ==1){
        message.reply("Oh non , le sort n'a pas touché , il fallait mieux visé !");
        console.log(randnum);
    }
 
    if (randnum ==2){
        message.reply("Le sort a bien touché , bon tir !");
        console.log(randnum);
    }

}}};