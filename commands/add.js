module.exports = {
    name: `maison`,
    description: `Test Command`,
    execute(client, message, args) {
   
        if (message.channel.type === "dm") return message.channel.send("Désolé , mais tu ne peux pas faire cette commande via les messages privés , pas d'utilité... :yawning_face: !");

function random(min, max){
    min = Math.ceil(1);
    max = Math.floor(4);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}


if (message.content === `.maison`) {
    random()
    if (randnum ==1){
        message.reply("Le choixpeau a décidé ! Vous êtes admis(e) à Gryffondor ! Félicitations.");
        console.log(randnum);
    }
 
    if (randnum ==2){
        message.reply("Le choixpeau a décidé ! Vous êtes admis(e) à Serdaigle ! Félicitations.");
        console.log(randnum);
    }

    if (randnum ==3){
        message.reply("Le choixpeau a décidé ! Vous êtes admis(e) à Serpentard ! Félicitations.");
        console.log(randnum);
    }

    if (randnum ==4){
        message.reply("Le choixpeau a décidé ! Vous êtes admis(e) à Poufsouffle ! Félicitations.");
        console.log(randnum);
    }
}}};
