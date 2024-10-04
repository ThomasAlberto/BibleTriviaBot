const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel, Partials.Message]
});

const { token } = require('/Users/thomas/Coding projects/Discord Bot github hidden/discordBotToken.js');
// const token = 'MTI5MTg1ODEwMzUyODE5NDEyMQ.GvEa5U.q-efxWhWfbBAiGt_jpNiQGia_YcHj7bGLuxRhY';

client.on('ready', async () => {
    console.log(`Client has been logged into. ${client.user.username}`);
});

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase() === "test") {
        message.reply("Test successful.").catch(err => console.error(err));
    }
});

client.login(token);
