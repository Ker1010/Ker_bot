const Discord = require('discord.js')
const { Client,Intents, MessageEmbed} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)
const fs = require('fs-extra')
require('discord-reply')

const clientId = '805028377102385183';
const guildId = '637793729285062676';

client.on ("ready", () => {
    console.log('bot online :D')
    client.user.setActivity(`開發進度7%`)
})

const prefix = '>'

client.commands = new Discord.Collection();

const commands = [];
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    //me
    if(command === 'crash'){
        client.commands.get('crash').execute(message, args);
    }
    //api
    if(command === 'cat'){
        client.commands.get('cat').execute(message, args);
    }
    //command
    if(command === 'help'){
        client.commands.get('help').execute(message, args)
    }
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'link'){
        client.commands.get('link').execute(message, args);
    }
    if(command === 'boom'){
        client.commands.get('boom').execute(message, args);
    }
    if(command === 'dog'){
        client.commands.get('dog').execute(message, args);
    }
    //meme
    if(command === 'ker'){
        client.commands.get('ker').execute(message, args);
    }
    if(command === 'dreya'){
        client.commands.get('dreya').execute(message, args);
    }
    if(command === 'black'){
        client.commands.get('black').execute(message, args);
    }
    //staff
    if(command === 'ker1'){
        client.commands.get('ker1').execute(message, args);
    }
    if(command === 'black1'){
        client.commands.get('black1').execute(message, args);
    }
    if(command === 'admin1'){
        client.commands.get('admin1').execute(message, args);
    }
    if(command === 'dreya1'){
        client.commands.get('dreya1').execute(message, args);
    }
});

client.on("message", message => {
        if(message.attachments.size > 0){
            if(message.channel.id === '937453049243385897'){
                if (message.attachments.every(attachIsImage)){
		        message.react('<:wumpus_luvs:939361527096545300>');  
        }}

        function attachIsImage(msgAttach) {
            var url = msgAttach.url;
            //True if this url is a png image.
            return url.indexOf("png", url.length - "png".length - "jpg".length/*or 3*/) !== -1;}
    }
})


    
client.login(process.env.token)