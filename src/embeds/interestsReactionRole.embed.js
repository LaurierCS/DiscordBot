/**
 * 
 * Embed that is sent to people when they join the Discord server.
 * 
 * @author Nausher Rao
 * 
 */
const embed = {
    "title": "💻 **Interests - Laurier Computing Society Reaction Roles**",
    "description": "Below you can find hobbies/interests that you can assign to yourself! Each one unlocks a channel for you to chat in!!! Refer to the legend, and just react with the emoji for the channel you want to unlock!",
    "color": 2897988,

    "thumbnail": {
        "url": "https://raw.githubusercontent.com/LaurierCS/DiscordBot/main/resources/icon.png"
    },

    "fields": [
        {
            "name": "He/Him",
            "value": "♂",
            "inline": true
        },

        {
            "name": "She/Her",
            "value": "♀",
            "inline": true
        },

        {
            "name": "They/Them",
            "value": "⚧️",
            "inline": true
        },

        {
            "name": "Other Pronoun",
            "value": "☮️",
            "inline": true
        },

    ]
};

module.exports = { embed };