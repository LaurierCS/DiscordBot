const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../config.json");
const firebase = main.firebase;

const logEmbed = require("../embeds/userLog.embed");

/**
 * 
 * 
 */
async function execute(message) {
    if (message.system || message.guild == null || message.member == null || message.member.user.id == discord.user.id)
        return;

    if (message.channel.parentID == config.categoryIds.important || message.channel.type == "news") {
        reactToAnnouncementMessage(message);

    }

    logModeratorActivity(message);
    logRegularActivity(message);
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
}

async function logRegularActivity(message) {
    const embed = getLogEmbed(message);
    const globalChannelLog = await discord.channels.fetch(config.channelIds.globalLog);
    const messageChannelLog = await discord.channels.fetch(config.channelIds.messageSendLog);

    await globalChannelLog.send({ embed: embed });
    await messageChannelLog.send({ embed: embed });

}

function reactToAnnouncementMessage(message) {
    const server = message.guild;
    // config.reactionEmojiIds.forEach(emojiId => {
    //     const emoji = server.emojis.fetch(emojiId);
    //     message.react(emoji);

    // });

    // const emojis = server.emojis.cache.random(11);
    // emojis.forEach(emoji => message.react(emoji));

}

function getLogEmbed(message) {
    const member = message.member;
    const user = member.user;

    let embed = logEmbed.embed;
    embed.title = "Message Sent";
    embed.description = `**Sent:** ${message.content}`;
    embed.url = message.url;
    embed.footer.text = `Message ID: ${message.id}`;
    embed.author.name = `${user.username}#${user.discriminator} // "${member.displayName}"`;
    embed.author.icon_url = `${user.displayAvatarURL()}`;
    embed.thumbnail.url = `${user.displayAvatarURL()}`;

    return embed;
}

module.exports = { name: "message", once: false, execute };