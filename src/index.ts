import DiscordJS, { Intents } from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";
import chalk from 'chalk';
import 'dotenv/config';

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

client.on("ready", () => {
  console.log(chalk.green(`Logged in as ${client.user?.tag}!`));

  const wok = new WOKCommands(client, {
    commandsDir: path.join(__dirname, "../commands"),

    typeScript: true,
    mongoUri: process.env.MONGO_URI,

    dbOptions: {
      keepAlive: true,
    },

	testServers: ["900633474858352660"],
    botOwners: ['865542945402126356', '707821823915589653'],

    disabledDefaultCommands: [
      'command',
      'channelonly',
      'help',
      'requiredrole',
      'slash',
    ]
  })

  .setDefaultPrefix(',')
});

client.login(process.env.TOKEN);
