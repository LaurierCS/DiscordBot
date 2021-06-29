const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;
const firebase = main.firebase;

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
        name: "moderator",
        description: "Add and remove moderators from the internal database.",
        options: [
            {
                name: "add",
                description: "Add a user to the internal database.",
                type: 1,
                options: [
                    {
                        name: "user",
                        description: "The specific user.",
                        type: 6,
                        required: true,

                    }
                ]
            },

            {
                name: "remove",
                description: "Removes a user from the internal database.",
                type: 1,
                options: [
                    {
                        name: "user",
                        description: "The specific user.",
                        type: 6,
                        required: true,
                    }
                ]
            }
        ],
    },

    execute: async (interaction) => {
        const option = interaction.data.options[0].name;
        const targetID = interaction.data.options[0].options[0].value;
        if (option == "add") {
            let added = await addModerator(targetID);
            let output = "Added that user as a moderator!";
            if (!added)
                output = "That user is already a moderator!";

            util.sendMessage(output, interaction);

        } else if (option == "remove") {
            let removed = await removeModerator(targetID);
            let output = "Removed that user as a moderator!";
            if (!removed)
                output = "That user isn't a moderator!";

            util.sendMessage(output, interaction);

        } else
            return;

    },
};

async function addModerator(targetID) {
    const col = firebase.getCollection("users");
    const ref = firebase.getDocumentReference(col, "moderator");
    const doc = await ref.get();

    let data = doc.data();
    if (!data[targetID]) {
        data[targetID] = "123";
        await ref.set(data);
        return true;

    } else
        return false;

}

async function removeModerator(targetID) {
    const col = firebase.getCollection("users");
    const ref = firebase.getDocumentReference(col, "moderator");
    const doc = await ref.get();

    let list = doc.data().moderators;
    const index = list.indexOf(targetID);
    if (index > -1) {
        list.splice(list.indexOf(targetID), 1);
        await ref.set({ "moderators": list });
        return true;

    } else
        return false;

}