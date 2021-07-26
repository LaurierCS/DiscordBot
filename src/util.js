const bot = require("./index");

/**
 *
 * Respond to a slash command interaction via a message in the same channel
 * the command originated in.
 *
 * @param {string} message The message to send to the channel.
 * @param {any} interaction The interaction data to respond to.
 */
function sendMessage(message, interaction) {
    bot.discord.api.interactions(interaction.id, interaction.token).callback.post({
        data: { type: 4, data: { content: message } },

    });
}

/**
 *
 * Respond to a slash command interaction via an embed in the same channel
 * the command originated in.
 *
 * @param {any} embed The embed to send to the channel.
 * @param {any} interaction The interaction data to respond to.
 */
function sendEmbed(embed, interaction) {
    bot.discord.api.interactions(interaction.id, interaction.token).callback.post({
        data: { type: 4, data: { embeds: [embed] } },

    });
}

/**
 *
 * Respond to a slash command interaction with a success handshake.
 *
 * @param {any} embed The embed to send to the channel.
 * @param {any} interaction The interaction data to respond to.
 */
function sendSuccess(interaction) {
    bot.discord.api.interactions(interaction.id, interaction.token).callback.post({
        data: { type: 5 }
    });

}

function getAllCourseChannels() {
    const regex = "(ma|cp|pc|ds|st)([0-9])([0-9])([0-9])";

}

function getAllMAChannels() {
    const regex = "(ma)([0-9])([0-9])([0-9])";

}

function getAllCSChannels() {
    const regex = "(cp)([0-9])([0-9])([0-9])";

}

function getAllPCChannels() {
    const regex = "(cp)([0-9])([0-9])([0-9])";

}

module.exports = { sendMessage, sendEmbed, sendSuccess };