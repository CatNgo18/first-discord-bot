require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});


client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'hello') {
        message.reply('hello');
    }

    if (message.content === 'embed') {
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

        message.channel.send({ embeds: [embed] });
    }
});


client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName === 'hey') {
            interaction.reply('hey!');
        }
    
        if (interaction.commandName === 'add') {
            const num1 = interaction.options.get('first-number').value;
            const num2 = interaction.options.get('second-number').value;
    
            interaction.reply(`The sum is ${num1+num2}`)
        }
    
        if (interaction.commandName === 'embed') {
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
        }
    };

    if (interaction.isButton()) {
        try {
            await interaction.deferReply({ ephemeral: true });

            const role = interaction.guild.roles.cache.get(interaction.customId);

            if (!role) {
                interaction.editReply({
                    content: "I couldn't find that role.",
                });
                return;
            }

            const hasRole = interaction.member.roles.cache.has(role.id);

            if (hasRole) {
                await interaction.member.roles.remove(role);
                await interaction.editReply(`The role ${role} has been removed.`);
                return;
            }

            await interaction.member.roles.add(role);
            await interaction.editReply(`The role ${role} has been added.`);
        } catch (error) {
            console.log(error);
        }
    }
});

client.login(process.env.TOKEN);