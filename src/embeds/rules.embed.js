/**
 * 
 * Embed used in the rules channel.
 * 
 * @author Nausher Rao
 * 
 */
const embed = {
    "title": "📜 ** Rules - Laurier Computing Society Discord Server** ",
    "description": "The LCS Discord server strives to provide a safe, accessible space for members of Laurier’s Mathematics and Computer Science programs to collaborate, study and connect. The following rules are in place to help further this goal. Failure to follow these rules may result in a ban, denying you access to the resources this server provides.",
    "color": 2897988,
    "footer": {
        "text": `Moderators reserve the right to use their own discretion in the enforcement of server rules.
        Rules last updated Feb 15th, 2023`
    },

    "thumbnail": {
        "url": "https://raw.githubusercontent.com/LaurierCS/DiscordBot/main/resources/icon.png"
    },

    "fields": [
        {
            "name": "💬 **General Behaviour**",
            "value": `- Treat others with the same level of respect and courtesy you would like to be treated
            - No harassment or bullying of individuals or groups
            - Hate speech, sexism, racially charged remarks or use of slurs will not be tolerated
            - Do not publish personal details of others or yourself. This includes phone numbers, addresses, payment details, etc.
            - Do not post sexually explicit or pornographic content
            - Refrain from political discussion. This is not a political server.
            - Please use the channels relevant to your topic of discussion
            - Disruptive noises and soundboards are not tolerated in voice channels
            - Ban evasion is not tolerated. If you believe your ban was in error, please contact a member of the moderation team to start an appeal.
            - Avoid spreading misinformation/disinformation. Use reputable sources, and don’t give advice where you aren’t qualified.`
        },

        {
            "name": "\u200B",
            "value": "\u200B",
        },

        {
            "name": "📛 **Academic Misconduct**",
            "value": `- The sale for sale of notes, homework solutions and test answers is strictly prohibited
            - Posting of brain dump/test bank websites such as CourseHero or Chegg is prohibited
            - Discussion of AI tools such as ChatGPT for the purposes of cheating is prohibited`
        },

        {
            "name": "\u200B",
            "value": "\u200B",
        },

        {
            "name":"🏷️ **Advertising/Solicitation**",
            "value":`- Advertisements for tutoring services, club events, or individually organized events must be approved by a moderator prior to posting
            - Job postings must link directly to official job boards or company websites
            - Advertisement of NFTs, Cryptocurrencies and Financial services is prohibited
            - Advertisers must be able to discuss the details of the advertisement in the server itself
            `
        }
    ]
};

module.exports = { embed };
