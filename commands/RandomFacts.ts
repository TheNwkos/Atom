import { ICommand } from 'wokcommands'

export default {
    category: 'Test',
    description: 'Test',

    callback: ({}) => {
        var facts = ['The DNA sequence of Stephen Hawking is stored on a hard disk, called the “Immortality Drive,” onboard the ISS. He is among a select group of humans to have their DNA immortalized.', 'fact', 'fact2'],

        var randomFacts = facts[Math.floor(Math.random() * facts.length)]
    }
} as ICommand;
