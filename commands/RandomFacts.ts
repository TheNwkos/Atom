import { ICommand } from "wokcommands";
import { facts } from "../facts.json";

export default {
  category: "Test",
  description: "Test",

  callback: ({ message, interaction }) => {
    // var facts = [
    //   "The DNA sequence of Stephen Hawking is stored on a hard disk, called the “Immortality Drive,” onboard the ISS. He is among a select group of humans to have their DNA immortalized.",
    //   "fact",
    //   "fact2",
    // ];

    var facts = facts[Math.floor(Math.random() * facts.length)];

    if (message) {
      message.reply({
        content: facts,
      });
    }

    if (interaction) {
      interaction.reply({
        content: facts,
      });
    }
  },
} as ICommand;
