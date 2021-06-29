const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../../config.json");
const logEmbed = require("../embeds/userLog.embed");


/**
 *
 * Example command that prints a ready message when the bot turns on.
 *
 */
module.exports = {
    name: "guildMemberAdd",

    once: false,

    execute: async (member) => {
        const embed = getLogEmbed(member).embed;
        const globalChannelLog = await discord.channels.fetch(config.channelIds.globalLog);
        const memberChannelLog = await discord.channels.fetch(config.channelIds.memberLog);

        await globalChannelLog.send({ embed: embed });
        await memberChannelLog.send({ embed: embed });

    },
};

function giveRoles(member) {


}

function sendWelcomeMessage(member) {


}

function getLogEmbed(member) {
    const user = member.user;

    let embed = logEmbed;
    embed.embed.title = "Message Join";
    embed.embed.footer.text = `**Member ID:** ${member.id}`;
    embed.embed.author.name = `${user.username}#${user.discriminator}`;
    embed.embed.author.icon_url = `${user.displayAvatarURL()}`;
    embed.embed.thumbnail.url = `${user.displayAvatarURL()}`;

    return embed;
}