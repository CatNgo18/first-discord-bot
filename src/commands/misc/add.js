const { ApplicationCommandOptionType, Client, Interaction } = require('discord.js');

// Example of slash command option w/ choices
module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    callback: (client, interaction) => {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
    
        interaction.reply(`The sum is ${num1+num2}`);
    },

    name: 'add',
    description: 'Adds two numbers.',
    options: [
        {
            name: 'first-number',
            description: 'The first number.',
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: 'one',
                    value: 1,
                },
                {
                    name: 'two',
                    value: 2,
                },
                {
                    name: 'three',
                    value: 3,
                },
            ],
            required: true,
        },
        {
            name: 'second-number',
            description: 'The second number.',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
    ]
}