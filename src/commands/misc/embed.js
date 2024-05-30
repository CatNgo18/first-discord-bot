const { Client, Interaction, EmbedBuilder } = require('discord.js');

module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
            .setTitle("Embed title")
            .setDescription('This is an embed description')
            .setColor(`Random`)
            .addFields({
                name: 'Field title',
                value: 'Some random value',
                inline: true,
            },
            {
                name: '2nd field title',
                value: 'Some random value',
                inline: true,
            });

        interaction.reply({ embeds: [embed] });
    },

    name: 'embed',
    description: 'Sends an embed.',
};