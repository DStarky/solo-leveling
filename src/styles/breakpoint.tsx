import { Strings } from "../types";

const size: Strings = {
	mobile: '576px',
	tablet: '768px',
	laptop: '1024px',
};

export const device: Strings = {
	mobile: `(max-width: ${size.mobile})`,
	tablet: `(min-width: ${size.mobile})`,
	laptop: `(min-width: ${size.tablet})`,
	desktop: `(min-width: ${size.laptop})`,
};
