const util = require("../util");
const main = require("../index");
const discord = main.discord;
const logger = main.logger;

const config = require("../config.json");
const logEmbed = require("../embeds/userLog.embed");
const welcomeEmbed = require("../embeds/welcome.embed");

/**
 *
 * Logs when a member joins the server. Also gives them some roles and DMs them a welcome message.
 * 
 * @author Nausher Rao
 *
 */
async function execute(member) {
    const embed = getLogEmbed(member);
    const globalChannelLog = await discord.channels.fetch(config.channelIds.globalLog);
    const memberChannelLog = await discord.channels.fetch(config.channelIds.memberLog);

    await globalChannelLog.send({ embed: embed });
    await memberChannelLog.send({ embed: embed });
    await member.roles.add(config.roleIds.join);
    await sendWelcomeMessage(member);
}

async function sendWelcomeMessage(member) {
    const dm = await member.createDM();
    const embed = welcomeEmbed.embed;

    await dm.send("Welcome!", { embed: embed });

}

function getLogEmbed(member) {
    const user = member.user;
    let embed = logEmbed.embed;

    embed.title = "Member Join";
    embed.url = `https://discord.com/users/${member.id}`;
    embed.description = "";
    embed.footer.text = `**Member ID:** ${member.id}`;
    embed.author.name = `${user.username}#${user.discriminator}`;
    embed.author.icon_url = `${user.displayAvatarURL()}`;
    embed.thumbnail.url = `${user.displayAvatarURL()}`;

    return embed;
}

module.exports = { name: "guildMemberAdd", once: false, execute };