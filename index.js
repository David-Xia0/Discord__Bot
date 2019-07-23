const Discord = require("discord.js-commando");
const bot = new Discord.Client();
const TOKEN = 'NTkzOTM5OTIwNjY2NzU1MDc2.XRVOIg.X9pbfsn-uK9JFummreCbDy9yzDk'

bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('music','Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};


bot.on('message', function(message){
    if(message.content == 'nigger')
    {
        message.channel.sendMessage(message.author + 'is a nigger');
    }

});

bot.on('ready', function(){
    console.log("ready");
})

bot.login(TOKEN);
