import DiscordJS, { Intents } from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "../commands"),
    featuresDir: path.join(__dirname, "../features"),

    typeScript: true,

	testServers: ["900633474858352660"]
  });
});

client.login(process.env.TOKEN);
