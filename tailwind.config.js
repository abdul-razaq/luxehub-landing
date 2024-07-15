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
		backgroundImage: {
			heroSvg: "url('/src/assets/svgs/hero.svg')",
			heroPng: "url('/assets/images/hero.png')",
			heroMobilePng: "url('/assets/images/hero-mobile.png')",

			versace: "url('/assets/images/brands/Versace.png')",
			cartier: "url('/assets/images/brands/Cartier.png')",
			givenchy: "url('/assets/images/brands/Givenchy.png')",
			gucci: "url('/assets/images/brands/Gucci.png')",
			nike: "url('/assets/images/brands/Nike.png')",
			prada: "url('/assets/images/brands/Prada.png')",
			tomFord: "url('/assets/images/brands/TomFord.png')",
		},
		fontSize: Fonts.FontSize,
	},
	plugins: [],
};
