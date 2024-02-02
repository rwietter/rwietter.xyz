// eslint-disable-next-line import/no-extraneous-dependencies
import { getPlaiceholder } from "plaiceholder";

export const blurImage = async (src: string) => {
	const {
		base64,
		img: { width, height, ...img },
	} = await getPlaiceholder(src, {});

	return {
		...img,
		blurDataURL: base64,
	};
};
