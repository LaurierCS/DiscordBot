const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../config.json");

/**
 *
 * Removes people roles on a reaction role message.
 *
 * @author Nausher Rao
 *
 */
async function execute(reaction, user) {
    let message = reaction.message;
    let server = message.guild;
    let emoji_id = reaction.emoji.name;

    if (message.id == config.messageIds.courseRoleReaction) {
        const roleId = config.roleIds.reactionRoles.courses[emoji_id];
        if (!roleId)
            return;

        const member = await server.members.fetch(user.id);
        await member.roles.remove(roleId);

        const courseRoles = Object.values(config.roleIds.reactionRoles.courses);
        const headerRoleId = config.roleIds.reactionRoles.headers.courses;
        await deleteHeaderRole(member, courseRoles, headerRoleId);

    } else if (message.id == config.messageIds.interestRoleReaction) {
        const roleId = config.roleIds.reactionRoles.interests[emoji_id];
        if (!roleId)
            return;

        const member = await server.members.fetch(user.id);
        await member.roles.remove(roleId);

        const interestRoles = Object.values(config.roleIds.reactionRoles.interests);
        const headerRoleId = config.roleIds.reactionRoles.headers.interests;
        await deleteHeaderRole(member, interestRoles, headerRoleId);


    }
}

async function deleteHeaderRole(member, targetRoles, headerRoleId) {
    let memberRoleIds = [];
    member.roles.cache.each(role => memberRoleIds.push(role.id));

    let anyRolesLeft = false;
    for (let i = 0; i < targetRoles.length && !anyRolesLeft; i++)
        anyRolesLeft = memberRoleIds.includes(targetRoles[i]);

    if (!anyRolesLeft)
        await member.roles.remove(headerRoleId);

}

module.exports = { name: "messageReactionRemove", once: false, execute };