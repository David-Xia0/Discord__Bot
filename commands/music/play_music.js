const commando = require('discord.js-commando');
const ytdl = require('ytdl-core'); 
var search = require('yt-search');


function play(connection, message)
{
    var server = servers[message.guild.id];
    server = {currentPlaying: stream = ytdl(server.queue.shift())};
    server.dispatcher = connection.playStream(server.currentPlaying);
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message);
        }else{
            connection.disconnect();
        }
    })

}

function videoSearch(message){


    var searchResult = search(message.content.substring(4,message.content.length), function(err,r){
        if(err)console.log(err);
        
        servers[message.guild.id].queue.push("youtube.com" + r.videos[0].url);
        console.log(servers[message.guild.id].queue[0]);
    })    
}

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'joins the voice channel of the commander'
        });
    }

    async run(message, args)
    {
    console.log(args);
    
        if(message.member.voiceChannel)
        {
            if(!servers[message.guild.id])
            {
                servers[message.guild.id] = {queue: []};
            } 
              videoSearch(message);
                message.member.voiceChannel.join()
                    .then( connection =>{
                        play(connection,message);
                    }).catch(console.log);

        }
        else
        {
            message.reply("you must be in a voice channel to summon me!")
        }

    }
}
module.exports = JoinChannelCommand;
