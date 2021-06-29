const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../../config.json");
const firebase = main.firebase;

const logEmbed = require("../embeds/userLog.embed");

/**
 * 
 * Example event that logs a debug message everytime a messsage
 * is sent.
 * 
 */
module.exports = {

    name: "message",

    once: false,

    execute: async (message) => {
        if (member.user.id == discord.user.id)
            return;

        const isMod = await logModeratorActivity(message);
        if (!isMod) {
            const embed = getLogEmbed(message).embed;
            const globalChannelLog = await discord.channels.fetch(config.channelIds.globalLog);
            const messageChannelLog = await discord.channels.fetch(config.channelIds.messageLog);

            console.log(embed);
            await globalChannelLog.send({ embed: embed });
            await messageChannelLog.send({ embed: embed });

        }
    }
}

async function logModeratorActivity(message) {
    const member = message.member;
    const userID = message.author.id;
    const isMod = member.roles.cache.some(role => role.id == config.roleIds.moderator);

    if (isMod) {
        const col = firebase.getCollection("users");
        const ref = firebase.getDocumentReference(col, "moderator");
        const doc = await ref.get();

        let data = doc.data();
        data[userID] = data[userID] ? data[userID] + 1 : 1;
        await ref.set(data);

    }

    return isMod;
}

function getLogEmbed(message) {
    const member = message.member;
    const user = member.user;

    let embed = logEmbed;
    embed.embed.title = "Message Sent";
    embed.embed.description = `**Sent:** ${message.content}`;
    embed.embed.footer.text = `**Message ID:** ${message.id}`;
    embed.embed.author.name = `${user.username}#${user.discriminator} // "${member.displayName}"`;
    embed.embed.author.icon_url = `${user.displayAvatarURL()}`;
    embed.embed.thumbnail.url = `${user.displayAvatarURL()}`;

    return embed;
}