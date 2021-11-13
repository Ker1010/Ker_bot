const Discord = require('discord.js')
const { Client,Intents, MessageEmbed} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)
const fs = require('fs-extra')

const clientId = '805028377102385183';
const guildId = '637793729285062676';

client.on ("ready", () => {
    console.log('bot online :D')
    client.user.setActivity(`開發進度3%`)
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


client.login(process.env.token)
