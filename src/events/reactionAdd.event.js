const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../../config.json");

/**
 *
 * 
 *
 */
module.exports =
{
    name: "messageReactionAdd",

    once: false,

    execute: (reaction, user) => {
        let message = reaction.message;
        let server = message.guild;
        if (message.id == config.message_ids.courseRoleReaction) {
            let emoji = reaction.emoji;
            for (const role in config.roleIds) {


            }

        } else {
            console.log("ahey");

        }
    },

};