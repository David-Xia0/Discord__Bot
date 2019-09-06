const Discord = require("discord.js-commando");
const bot = new Discord.Client();
const TOKEN = 'NTkzOTM5OTIwNjY2NzU1MDc2.XRVOIg.X9pbfsn-uK9JFummreCbDy9yzDk'

bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('music','Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};


bot.on('message', function(message){
    if(message.content == 'hello')
    {
        message.channel.sendMessage('Hi' + message.author);
    }

});

bot.on('ready', function(){
    console.log("ready");
})

bot.login(TOKEN);
