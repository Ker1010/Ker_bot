module.exports = {
    name: 'black1',
    description: "ping black",
    execute(message, args){
        if(message.member.roles.cache.has('774974794017406986','774972264415363074','774973318134104115','774972969734635520','879884166781628447','879914287471149067')){
            message.channel.send('<@590161154081554432>');
            message.channel.send('<@590161154081554432>');
            message.channel.send('<@590161154081554432>');
            message.channel.send('<@590161154081554432>');
            message.channel.send('<@590161154081554432>');
        } else {
        message.channel.send(`:no_entry_sign: **${message.author.username}**，你不能使用它。`)
        }
    }
}