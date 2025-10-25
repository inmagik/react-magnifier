import pkg from "../package.json";

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		options: {
			brandTitle: pkg.name,
			brandUrl: pkg.homepage,
			showPanel: false,
		},
	},
};

export default preview;
