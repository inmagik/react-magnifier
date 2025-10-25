/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
	stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: ["@storybook/addon-links", "@storybook/addon-actions"],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	typescript: {
		check: false,
		reactDocgen: false,
	},
};

export default config;
