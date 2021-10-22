import { ICommand } from "wokcommands";

export default {
    category: "fun",
    description: "Fun science facts that you may or may not have known.",

    slash: "both",
    testOnly: true, 

    callback: ({ message,interaction }) => {
        const reply = "The DNA sequence of Stephen Hawking is stored on a hard disk, called the “Immortality Drive,” onboard the ISS. He is among a select group of humans to have their DNA immortalized."

        if (message) {
            message.reply({
                content: reply,
            })
        }

        interaction.reply({
            content: reply,
        })
    }
} as ICommand