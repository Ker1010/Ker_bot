module.exports = {
    name: 'ping',
    description: "ping ms",
    execute(message, args) {
        message.channel.send('Pong!').then((msg) => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`Pong! `+ping+'ms');
})}}