/**
 * 
 * Embed used in the rules channel.
 * 
 * @author Nausher Rao
 * 
 */
const embed = {
    "title": "**Welcome to the Laurier Computing Society Discord server!** :computer: ",
    "description": "If this is your **first time using Discord**, refer to the Youtube video **[here](https://www.youtube.com/watch?v=TJ13BA3-NR4)!**",
    "url": "https://lauriercs.ca",
    "color": 2897988,
    "timestamp": "2021-06-28T18:04:23.154Z",
    "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
        "text": "footer text"
    },

    "image": {
        "url": "https://cdn.discordapp.com/embed/avatars/1.png"
    },

    "author": {
        "name": "",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },

    "fields": [
        {
            "name": "🤔",
            "value": "some of these properties have certain limits..."
        },
        {
            "name": "😱",
            "value": "try exceeding some of them!"
        },
        {
            "name": "🙄",
            "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
        },
        {
            "name": "<:thonkang:219069250692841473>",
            "value": "these last two",
            "inline": true
        },
        {
            "name": "<:thonkang:219069250692841473>",
            "value": "are inline fields",
            "inline": true
        }
    ]
};

module.exports = { embed };