const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('track')
		.setDescription('Adds a profile to the ban tracking list!')
		.addStringOption(profileUrl =>
            profileUrl.setName('track')
            .setDescription('The Steam profile URL to track.')
            .setRequired(true)),
	async execute(interaction) {
        const profileUrl = interaction.options.getString('track');
        await interaction.reply(`Added ${profileUrl} to the ban tracking list!`);
	},
};
