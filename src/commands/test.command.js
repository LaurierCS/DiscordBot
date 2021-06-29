const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

/**
 *
 * A command file that contains the JSON needed to POST the command
 * to the Discord command endpoint AND the code needed to handle
 * the command when it's triggered.
 *
 * Reference -> https://discord.com/developers/docs/interactions/slash-commands#registering-a-command
 *
 * @author Nausher Rao
 *
 */
module.exports = {
    // Data object that includes all the JSON to post to the Discord command endpoint.
    data: {
        name: "test",
        description: "test.",
        type: 2,

        // Code executed when this slash command is used by a valid user.
        execute: (interaction) => {

        },
    }
};
