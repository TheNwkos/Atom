import { Client } from "discord.js";
import { ICommand } from "wokcommands";

const setStatus = (client: Client, status: string) => {
  client.user?.setPresence({
    status: "online",
    activities: [
      {
        name: status,
      },
    ],
  });
};

export default {
  category: "Development",
  description: "Updates the status of DumbShadow",  
  

  slash: "both",
  testOnly: true,

  hidden: true,

  minArgs: 1,
  expectedArgs: "<status>",

  ownerOnly: true,

  init: (client: Client) => {
    const status = `,help`;
    setStatus(client, status);
  },

  callback: ({ client, text, message }) => {
   setStatus(client, text);
  
    return "Status set!"
  },
} as ICommand
