import React from "react";

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		options: {
			showPanel: false,
		},
	},
	decorators: [
		(Story) =>
			React.createElement(
				"div",
				{
					style: {
						display: "flex",
						justifyContent: "center",
						margin: "100px 0",
					},
				},
				React.createElement(Story)
			),
	],
};

export default preview;
