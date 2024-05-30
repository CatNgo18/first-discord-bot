const { ActivityType } = require('discord.js');

module.exports = (client) => {
    const status = [
        {
            name: "custom status 1",
            type: ActivityType.Streaming,
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs',
        },
        {
            name: "custom status 2",
        },
        {
            name: "custom status 3",
            type: ActivityType.Watching,
        },
        {
            name: "custom status 4",
            type: ActivityType.Listening,
        }
    ];

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000);
}