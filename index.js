const Discord = require('discord.js')
const { Client, MessageEmbed } = require('discord.js')
const client = new Client({intents: 3243773});
const token = "MTA0MzY3MTYwNjgwNDg4MTQzOA.G9yq-M.RJRJp-MQFu4xUM4o2Q6HbxbA2VlUuP5GgECzt8";
const prefix = "M!";

client.on("ready", async () => {
    console.log("It's Ready");
})

client.on("messageCreate", (msg) => {
    
    if(msg.content.startsWith(prefix + 'ping')) {
        const embed = new Discord.MessageEmbed()
       
        .setTitle('🏓   pong!')
        
        msg.reply({embeds: embed })
    }
})

client.login(token)