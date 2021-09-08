/**
 * 
 * Embed that is sent to people when they join the Discord server.
 * 
 * @author Nausher Rao
 * 
 */
const embed = {
    "title": "💻 **Welcome - Laurier Computing Society Discord Server**",
    "description": "We are the official student operated society of Wilfrid Laurier University’s Computer Science department.",
    "url": "https://lauriercs.ca",
    "color": 2897988,

    "author": {
        "name": "👋 Welcome!"
    },

    "thumbnail": {
        "url": "https://raw.githubusercontent.com/LaurierCS/DiscordBot/main/resources/icon.png"
    },

    "fields": [
        {
            "name": "❓ Who are we?",
            "value": "Laurier Computing Society is the official student operated society of Wilfrid Laurier University’s Computer Science department. We strive to help students realise their potential in STEM by enriching their academic and professional development. Our objective is to create initiatives and events to involve students in tech to challenge and improve their skills, and foster a sense of community.",
        },

        {
            "name": "\u200B",
            "value": "\u200B",
        },

        {
            "name": "💰 Can I get free stuff?!?!?!",
            "value": "We do monthly money gift card giveaways on our socials, so follow us there! As well as that, all our in person events have free food and refreshments!",
        },

        {
            "name": "\u200B",
            "value": "\u200B",
        },

        {
            "name": "🏆 So... what type of events do you run?",
            "value": "We run a wide range of events. We have our signature 'Meet the Professionals' events that let students and professionals connect and get information about the industry. We also run events such as our “Learn a Tool Series”, where we showcase and preview different popular technologies used in the industry that can help students personally, in projects, or in their careers. We also run fun events, such as regular socials, gaming events, and competitions! Stay tuned on our socials to learn more!",
        },

        {
            "name": "\u200B",
            "value": "\u200B",
        },

        {
            "name": "📋 This sounds sick! How do I join?!?!?",
            "value": "You don't have to do anything special! Just attend 2 of our events a term to be considered a part of the club! If you want to be a part of the executive team, feel free to contact any of the executive members for more information!",
        },

        {
            "name": "\u200B",
            "value": "\u200B",
        },

        {
            "name": "🏫 Where do I learn more???",
            "value": "Learn more about the club **[here](https://lauriercs.ca)**!",
        },
    ]
};

module.exports = { embed };