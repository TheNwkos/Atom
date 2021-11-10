import { ICommand } from "wokcommands";

export default {
    category: 'Utilities',
    description: 'Pong!',

    testOnly: true,
    slash: 'both',

    callback: ({ message, interaction }) => {
        const ping = `🏓Pong! At ${Date.now() -  message.createdTimestamp}ms`

        if (message) {
            message.reply({
                content: ping
            })
        }

        if (interaction) {
            interaction.reply({
                content: ping
            })
        }
    }
} as ICommand
