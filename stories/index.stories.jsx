import React from "react";

import Magnifier from "../dist/Magnifier.es";
import BASE_64_IMG from "./test-image-base-64";
import testImageSmall from "./test-image-small.jpg";
import testImage from "./test-image.jpg";

const IMG_WIDTH = "50%";

const CenterDecorator = (Story) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				margin: "100px 0",
			}}
		>
			<Story />
		</div>
	);
};

export default {
	title: "Magnifier",
	component: Magnifier,
	decorators: [CenterDecorator],
};

export const Round = () => <Magnifier src={testImage} width={IMG_WIDTH} />;

export const Square = () => <Magnifier src={testImage} mgShape="square" width={IMG_WIDTH} />;

export const HideOverflow = () => (
	<Magnifier
		src={testImage}
		mgShowOverflow={false}
		mgTouchOffsetX={0}
		mgTouchOffsetY={0}
		width={IMG_WIDTH}
	/>
);

export const DifferentImages = () => (
	<Magnifier src={testImageSmall} zoomImgSrc={testImage} width={IMG_WIDTH} />
);

export const Base64Image = () => <Magnifier src={BASE_64_IMG} width={IMG_WIDTH} />;



