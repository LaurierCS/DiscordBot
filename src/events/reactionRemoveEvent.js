const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../config.js");

/**
 *
 * Removes people roles on a reaction role message.
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

        const member = await server.members.fetch(user.id);
        await member.roles.remove(roleId);
        logger.debug("Removed role for interests reaction role!");

        const interestRoles = Object.values(config.roleIds.reactionRoles.interests);
        const interestHeaderRoleId = config.roleIds.reactionRoles.headers.interests;
        await deleteHeaderRole(member, interestRoles, interestHeaderRoleId);

    } else if (message.id == latestCoursesMessage.id) {
        const roleId = config.roleIds.reactionRoles.courses[emoji_id];
        if (!roleId)
            return;

        const member = await server.members.fetch(user.id);
        await member.roles.remove(roleId);
        logger.debug("Removed role for course reaction role!");

        const courseRoles = Object.values(config.roleIds.reactionRoles.courses);
        const courseHeaderRoleId = config.roleIds.reactionRoles.headers.courses;
        await deleteHeaderRole(member, courseRoles, courseHeaderRoleId);

    } else if (message.id == latestGenderMessage.id) {
        const roleId = config.roleIds.reactionRoles.genders[emoji_id];
        if (!roleId)
            return;

        const member = await server.members.fetch(user.id);
        await member.roles.remove(roleId);
        logger.debug("Removed role for gender reaction role!");
    }
}

async function deleteHeaderRole(member, targetRoles, interestHeaderRoleId) {
    let memberRoleIds = [];
    member.roles.cache.each(role => memberRoleIds.push(role.id));

    let anyRolesLeft = false;
    for (let i = 0; i < targetRoles.length && !anyRolesLeft; i++)
        anyRolesLeft = memberRoleIds.includes(targetRoles[i]);

    if (!anyRolesLeft) {
        await member.roles.remove(interestHeaderRoleId);
        logger.debug("Deleted header role!");
    }
}

async function getLatestMessage(channelId) {
    const channel = await discord.channels.fetch(channelId);
    return (await channel.messages.fetch({ limit: 1 })).first();

}

module.exports = { name: "messageReactionRemove", once: false, execute: execute, enabled: true };