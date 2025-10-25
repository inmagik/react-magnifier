import React from "react";

import Magnifier from "../dist/Magnifier.es";
import BASE_64_IMG from "./test-image-base-64";
import testImageSmall from "./test-image-small.jpg";
import testImage from "./test-image.jpg";

const IMG_WIDTH = "50%";

export default {
	title: "Magnifier",
	component: Magnifier,
};

export const Round = () => React.createElement(Magnifier, { src: testImage, width: IMG_WIDTH });

export const Square = () =>
	React.createElement(Magnifier, { src: testImage, mgShape: "square", width: IMG_WIDTH });

export const HideOverflow = () =>
	React.createElement(Magnifier, {
		src: testImage,
		mgShowOverflow: false,
		mgTouchOffsetX: 0,
		mgTouchOffsetY: 0,
		width: IMG_WIDTH,
	});

export const DifferentImages = () =>
	React.createElement(Magnifier, { src: testImageSmall, zoomImgSrc: testImage, width: IMG_WIDTH });

export const Base64Image = () => React.createElement(Magnifier, { src: BASE_64_IMG, width: IMG_WIDTH });

