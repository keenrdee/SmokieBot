const Discord = require('discord.js-commando');
const SMOKIE_BOT = new Discord.Client();

//Invite the bot to a server
// https://discordapp.com/api/oauth2/authorize?client_id=[Insert CLIENT_ID]&scope=bot&permissions=1
const CLIENT_ID = process.env.ID;

//private token to connect to the bot - DO NOT SHARE
const SMOKIE_BOT_TOKEN = process.env.token;

SMOKIE_BOT.registry.registerGroup('nickname', 'Nickname');
SMOKIE_BOT.registry.registerDefaults();
SMOKIE_BOT.registry.registerCommandsIn(__dirname + '/commands');

SMOKIE_BOT.on('message', function(message){

    if(message.content == "help" & message.channel.type == "dm") return;
    if(message.content.includes("Hi"))
    {
        message.channel.sendMessage("Hello, " + message.author + 
        "! Smokie leaves ain't for you");   
    }
   
});

SMOKIE_BOT.on("guildMemberAdd", function(member)
{
member.send("Hello, " + member.displayName + "!\nWelcome to TIAMAT's Discord Channel!" +
"\nPlease take sometime to set your in-game job at #tiamat-guild-role");
let memberRole = member.guild.roles.find("name", "armee");
member.addRole(memberRole);

});

SMOKIE_BOT.on('ready', function(){
    console.log("Ready");
})

//Make the bot online
SMOKIE_BOT.login(SMOKIE_BOT_TOKEN);