const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const { Permissions } = require("discord.js");

/**
 * 
 * Command that lets a user delete a certain amount of messsages from a channel.
 * This command should be reserved for admins/moderators.
 * 
 * @author Nausher Rao
 * 
 */
async function execute(interaction) {
    const serverId = interaction.guild_id;
    const memberId = interaction.member.user.id;
    const channelID = interaction.channel_id;

    const server = await discord.guilds.fetch(serverId);
    const member = await server.members.fetch(memberId);
    const channel = await discord.channels.fetch(channelID);

    if (util.hasPermission(member, Permissions.FLAGS.MANAGE_MESSAGES)) {
        let amount = interaction.data.options ? interaction.data.options[0].value : 100;
        let deletedMessages = await channel.bulkDelete(amount, { filterOld: true });
        let deleted = deletedMessages.size;
        util.sendMessage(`Removed ${deleted} messages!`, interaction);

    } else {
        util.sendMessage("You do not have permission to use this command!", interaction);
    }
}

const data = {
    name: "purge",
    description: "Purge all, or a certain amount, of messages from the channel this command was executed in.",
    default_permission: true,
    type: 1,
    options: [
        {
            name: "amount",
            description: "The amount of messages to purge",
            type: 4,
            required: false,
        },
    ],
};

module.exports = { execute: execute, data: data, enabled: true };