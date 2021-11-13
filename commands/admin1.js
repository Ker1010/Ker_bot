module.exports = {
    name: 'admin1',
    slash: 'admin1',
    testOnly: true,
    description: "ping admin",
    execute(message, args){

        if(message.member.roles.cache.has('774974794017406986','774972264415363074','774973318134104115','774972969734635520','879884166781628447','879914287471149067')){
            message.channel.send('<@864502233428131842>');
            message.channel.send('<@864502233428131842>');
            message.channel.send('<@864502233428131842>');
            message.channel.send('<@864502233428131842>');
            message.channel.send('<@864502233428131842>');
        } else {
            message.channel.send(`:no_entry_sign: **${message.author.username}**，你不能使用它。`)
        }
    } 
    
}
