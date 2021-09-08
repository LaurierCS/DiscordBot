const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../config.js");

/**
 *
 * Grants people roles on a reaction role message.
 *
 * @author Nausher Rao
 *
 */
async function execute(reaction, user) {
    if (user.bot)
        return;

    let message = reaction.message;
    let server = message.guild;
    let emoji_id = reaction.emoji.name;

    const latestInterestMessage = await getLatestMessage(config.channelIds.reactionRoles.interests);
    const latestCoursesMessage = await getLatestMessage(config.channelIds.reactionRoles.courses);
    const latestGenderMessage = await getLatestMessage(config.channelIds.reactionRoles.gender);

    if (message.id == latestInterestMessage.id) {
        const roleId = config.roleIds.reactionRoles.interests[emoji_id];
        if (!roleId)
            return;

        const interestHeaderRoleId = config.roleIds.reactionRoles.headers.interests;
        const member = await server.members.fetch(user.id);
        await member.roles.add([roleId, interestHeaderRoleId]);
        logger.debug("Given role for interests reaction role!");

    } else if (message.id == latestCoursesMessage.id) {
        const roleId = config.roleIds.reactionRoles.courses[emoji_id];
        if (!roleId)
            return;

        const coursesHeaderRoleId = config.roleIds.reactionRoles.headers.courses;
        const member = await server.members.fetch(user.id);
        await member.roles.add([roleId, coursesHeaderRoleId]);
        logger.debug("Given role for courses reaction role!");

    } else if (message.id == latestGenderMessage.id) {
        const roleId = config.roleIds.reactionRoles.genders[emoji_id];
        if (!roleId)
            return;

        const member = await server.members.fetch(user.id);
        await member.roles.add(roleId);
        logger.debug("Given role for gender reaction role!");
    }
}

async function getLatestMessage(channelId) {
    const channel = await discord.channels.fetch(channelId);
    return (await channel.messages.fetch({ limit: 1 })).first();

}

module.exports = { name: "messageReactionAdd", once: false, execute: execute, enabled: true };