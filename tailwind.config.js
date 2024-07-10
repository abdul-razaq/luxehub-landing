/** @type {import('tailwindcss').Config} */
import Colors from './src/theme/Colors.ts';
import * as Fonts from './src/theme/Fonts.ts';

export default {
	content: ['./src/**/*.{tsx, jsx, ts, js}', 'index.html'],
	theme: {
		extend: {
			colors: Colors,
			fontFamily: {
				SFblack: ['black'],
				SFbold: ['bold'],
				SFheavy: ['heavy'],
				SFlight: ['light'],
				SFmedium: ['medium'],
				SFsemibold: ['semibold'],
				SFthin: ['thin'],
				SFultralight: ['ultralight'],
				SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
			},
		},
		fontSize: Fonts.FontSize,
	},
	plugins: [],
};
