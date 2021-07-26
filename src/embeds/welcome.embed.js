/**
 * 
 * Embed that is sent to people when they join the Discord server.
 * 
 * @author Nausher Rao
 * 
 */
const embed = {
    "title": "💻 **Welcome to the Laurier Computing Society Discord server!**",
    "description": "If this is your **first time using Discord**, refer to the Youtube video **[here](https://www.youtube.com/watch?v=TJ13BA3-NR4)!**",
    "url": "https://lauriercs.ca",
    "color": 2897988,

    "author": {
        "name": "👋 Welcome!",
    },

    "thumbnail": {
        "url": "https://raw.githubusercontent.com/LaurierCS/Website/main/assets/icon.png"
    },

    "fields": [
        {
            "name": "📜 Rules",
            "value": "Make sure to check out the rules channel to read up on all our rules! You must accept the ToS before being able to use the server!",
            "inline": false
        },


        {
            "name": "\u200B",
            "value": "\u200B",

        },

        {
            "name": "⚽️ Interests",
            "value": "We have reaction roles so that you can give yourself access to different channels for different interests, such as sports, crypto, etc...",
            "inline": false
        },

        {
            "name": "\u200B",
            "value": "\u200B",

        },

        {
            "name": "🎓 Courses",
            "value": "We also have reaction roles you can give yourself for different courses to talk with others about them!",
            "inline": false
        },

        {
            "name": "\u200B",
            "value": "\u200B",

        },

        {
            "name": "🏫 The Club",
            "value": "Learn more about the club **[here](https://lauriercs.ca)!",
            "inline": false
        },
    ]
};

module.exports = { embed };