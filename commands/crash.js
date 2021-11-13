module.exports = {
    name: 'crash',
    description: "crash",
    execute(message, args){
        if(message.member.roles.cache.has('774974794017406986')){
            message.channel.send(message.channel.send({ embeds: [newEmbed] }))
        } else {
            message.channel.send(`:no_entry_sign: **${message.author.username}**，你不能使用它`)
        }
    } 
    
}