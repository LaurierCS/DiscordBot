const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../config.json");
const memberJoinEvent = require("./memberJoin.event");

/**
 *
 * Grants people roles on a reaction role message.
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
        const headerId = config.roleIds.reactionRoles.headers.courses;

        const member = await server.members.fetch(user.id);
        await member.roles.add([roleId, headerId]);

    } else if (message.id == config.messageIds.interestRoleReaction) {
        const roleId = config.roleIds.reactionRoles.interests[emoji_id];
        const headerId = config.roleIds.reactionRoles.headers.interests;

        const member = await server.members.fetch(user.id);
        await member.roles.add([roleId, headerId]);

    }
}

module.exports = { name: "messageReactionAdd", once: false, execute };