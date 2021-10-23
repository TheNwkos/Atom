import { ICommand } from "wokcommands";

export default {
    category: 'Info',
    description: 'Help command',

    names: ['help'],
    aliases: ['h'],

    slash: 'both',
    
    callback: ({ message, interaction }) => {

    }
} as ICommand
