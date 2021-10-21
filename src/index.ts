import DiscordJS from 'discord.js';
import WOKCommands from 'wokcommands';
import path from 'path';


const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILDS_MESSAGES,
	],
});

client.on('ready', () => {
	console.log(`${client.user.tag} is ready to share knowledge!`)

	new WOKCommands(client, {
		commandsDir: path.join(__dirname, 'commands'),
		featuresDir: path.join(__dirname, 'features'),

		typescript: 'true',
	})
})

client.login(process.env.TOKEN);
