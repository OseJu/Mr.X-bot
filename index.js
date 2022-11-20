const Discord = require('discord.js')
const { Client, MessageEmbed } = require('discord.js')
const client = new Client({intents: 3243773});
const token = "SecretToken";
const prefix = "M!";

client.on("ready", async () => {
    console.log("It's Ready");
})

client.on("messageCreate", (msg) => {
    
//     Test ping comando.
    
    if(msg.content.startsWith(prefix + 'ping')) {
        const embed = new Discord.MessageEmbed()
       
        .setTitle('🏓   pong!')
        
        msg.reply({embeds: embed })
    }
})


// #######   ####   ######    # # #  #    #           #    #
// #     #  #       #             #  #    #           #    #
// #     #   ####   #####         #  #    #           #    #
// #     #       #  #       #     #  #    #        #  #    #    #
// #     #  #    #  #       #     #  #    #        #            #
// #######   ####   ######   #####    ####          # # # # # #

client.login(token)
