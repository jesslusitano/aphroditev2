const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ('<')

bot.on('ready', function(){
    bot.user.setGame("< help");
    console.log("@jess-lusitano");
});

bot.login("NDk4NDg0MTM5NjI4OTUzNjIw.Dpuaig.yJOKUyWx1A4kuGfBXOVdKVZTVyI");

bot.on("message", message => {
    if (message.content === prefix + "help"){
    var help = new Discord.RichEmbed()
    
    }
    {if(message.content === prefix + "centre-ville souterrain"){

    var replys = [
    "ta cheville se coince dans un trou <@>",
    "un bout de plafond te tombe dessus <@>",
    "tu te fait mordre pas un rat <@>",
    "tu touche un fil eletrique et te prend une petite decharge <@>",
    "tu tombe dans l'eau",
    "une subtance d'origine non identifier assez visqueuse qui bouge te tombe sur l'epaule <@>",
    "tu marche sur un skateboard qui a ton contact se met a defaler une pente tu t'ecrase comme un vulgaire etron sur le sol",
    "un gang arrive et te prend des vivres ",
    "tu te prend un mur",
    "tu t'ecroule sur le trottoire",
    "5 piece a echanger",
    "10 piece a echanger",
    "15 piece a echanger",
    "20 piece a echanger",
    "25 piece a echanger",
    "30 piece a echanger",
    "35 piece a echanger",
    "40 piece a echanger",
    "45 piece a echanger",
    "50 piece a echanger",
    "60 piece a echanger",
    "70 piece a echanger",
    "80 piece a echanger",
    "90 piece a echanger",
    "95 piece a echanger",
    "100 piece a echanger",
    "105 piece a echanger",
    "110 piece a echanger",
    "115 piece a echanger",
    "120 piece a echanger",
    "125 piece a echanger",
    "130 piece a echanger",
    "135 piece a echanger",
    "140 piece a echanger",
    "145 piece a echanger",
    "150 piece a echanger",
    "155 piece a echanger",
    "160 piece a echanger",
    "165 piece a echanger",
    "170 piece a echanger",
    "175 piece a echanger",
    "180 piece a echanger",
    "185 piece a echanger",
    "190 piece a echanger",
    "195 piece a echanger",
    "200 piece a echanger",
    "205 piece a echanger",
    "210 piece a echanger",
    "215 piece a echanger",
    "220 piece a echanger",
    "225 piece a echanger",
    "230 piece a echanger",
    "235 piece a echanger",
    "240 piece a echanger",
    "245 piece a echanger",
    "250 piece a echanger",
    "255 piece a echanger",
    "260 piece a echanger",
    "265 piece a echanger",
    "270 piece a echanger",
    "275 piece a echanger",
    "roue de voiture x1",
    "roue de moto x1",
    "bidon d'essence x1",
    ];

    let reponse = (replys[Math.floor(Math.random()*replys.length)]);
    message.reply (reponse);}

    { 
        if (message.content === prefix + "ruelle souterraine"){
    var ruellesous = [
        "moteur de voiture",
        "moteur de moto",
        "bidon d'essence x1",
        "5 piece a echanger",
        "10 piece a echanger",
        "15 piece a echanger",
        "20 piece a echanger",
        "25 piece a echanger",
        "30 piece a echanger",
        "35 piece a echanger",
        "40 piece a echanger",
        "45 piece a echanger",
        "50 piece a echanger",
        "55 piece a echanger",
        "60 piece a echanger",
        "65 piece a echanger",
        "70 piece a echanger",
        "75piece a echanger",
        "80piece a echanger",
        "85piece a echanger",
        "90piece a echanger",
        "95piece a echanger",
        "100piece a echanger",
        "tu glisse sur un caillou et tombe",
        "tu fait n'importe quoi en cherchant et te met le doight dans un piege a souris",
        "tu t'endort et un chien te pisse dessus",
        "tu pisse sur un mec qui te tabasse",
        "tu voit une jolie infirmiere qui s appele kayano et te fout une baffe",
    ];

        let ruellesouslaterre =(ruellesous[Math.floor(Math.random()*ruellesous.length)]);
        message.reply (ruellesouslaterre);}


    {
        if (message.content === prefix + "magasin1"){
            var magasin1 = [
        "un rayon t'ecrase",
        "5 piece a echanger",
        "10 piece a echanger",
        "15 piece a echanger",
        "20 piece a echanger",
        "25 piece a echanger",

        ];
        let maagasin1 = (magasin1[Math.floor(Math.random()*magasin1.length)]);
        message.reply(maagasin1);}



        {
            if (message.content === prefix + "magasin2"){
                var magasin2 = [
            "un rayon t'ecrase",
            "5 piece a echanger",
            "10 piece a echanger",
            "15 piece a echanger",
            "20 piece a echanger",
            "25 piece a echanger",
    
            ];
            let maagasin2 = (magasin2[Math.floor(Math.random()*magasin2.length)]);
            message.reply(maagasin2);}

        {
            if(message.content === prefix + "egout"){
            var egout1 = [
            "un crododile t'attrape la mange et te la mord",
            "tu tombe dans l'eau ou des merde flotte et l'eau et marron",
            "tu touche les parois et t'enfonce un bout de metal",
            "un gros rat de fait tomber par terre",
            "tu tombe sur un clown tueur",
            "50 piece a echanger",
         ];
         let egout2 = (egout1[Math.floor(Math.random()*egout1.length)]);
         message.reply(egout2);}
}}}}}})
    