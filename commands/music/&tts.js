const commando = require('discord.js-commando');





class TTSCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'tts',
            group: 'music',
            memberName: 'tts',
            description: 'joins the voice channel of the commander'
        });
    }

    async run(message, args)
    {
    console.log(args);
    
        if(message.member.voiceChannel)
        {
            
                message.member.voiceChannel.join()
                    .then( connection =>{
                        message.channel.send(args,{tts: true});
                    }).catch(console.log);

        }
        else
        {
            message.reply("you must be in a voice channel to summon me!")
        }

    }
}
module.exports = TTSCommand;
