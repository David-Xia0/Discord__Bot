const commando = require('discord.js-commando');

class DiceCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'rolldice',
            description: 'rolls a six sided dice'
        });
    }

    async run(message, args)
    {
        var roll = Math.floor(Math.random()*6+1);
        message.reply("your dice landed on" + roll);
    }
}
module.exports = DiceCommand;
