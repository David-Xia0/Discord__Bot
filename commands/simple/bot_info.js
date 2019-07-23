const commando = require('discord.js-commando');
const Discord = require('discord.js');

class BotInfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn a little more about the bot'
        });
    }

    

    async run(message, args)
    {
        var myInfo = new Discord.RichEmbed()
            .addField("About Me","Hello, my name is Ligma bots", true)
            .setColor(0xFF0000)
            .setFooter(" I am the bestest botest bot :)")

        message.channel.sendEmbed(myInfo);
    }
}
module.exports = BotInfoCommand;
