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
    console.log("remove1");

    let message = reaction.message;
    let server = message.guild;
    if (message.id == config.messageIds.courseRoleReaction) {
        let emoji_id = reaction.emoji.identifier;

        for (const role_key in config.reactionRoleIds) {
            if (emoji_id == role_key) {
                const member = await server.members.fetch({ user, force: true });
                const role_id = config.reactionRoleIds[emoji_id];
                const role = await server.roles.fetch(role_id);
                await member.roles.remove(role);

            }
        }
    }
}

module.exports = { name: "messageReactionRemove", once: false, execute };