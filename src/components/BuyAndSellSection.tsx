import React from 'react';

import BuyIcon1 from '../assets/svgs/buyAndSell/BuyIcon1.svg?react';
import BuyIcon2 from '../assets/svgs/buyAndSell/BuyIcon2.svg?react';
import BuyIcon3 from '../assets/svgs/buyAndSell/BuyIcon3.svg?react';

import SellIcon1 from '../assets/svgs/buyAndSell/SellIcon1.svg?react';
import SellIcon2 from '../assets/svgs/buyAndSell/SellIcon2.svg?react';
import SellIcon3 from '../assets/svgs/buyAndSell/SellIcon3.svg?react';

const data = {
	buy: {
		icons: [BuyIcon1, BuyIcon2, BuyIcon3],
		titles: ['Want it', 'Find it', 'Buy it'],
		descriptions: [
			'Easily browse our curated collections or use the search feature to find your desired luxury fashion items. Filter by category, brand, or price to quickly locate the perfect piece.',
			'Connect directly with sellers through our messaging platform. Ask questions, request more photos, or negotiate the price to ensure you’re getting exactly what you want.',
			'Once you’re satisfied, proceed to purchase with secure payment options. Choose to buy now or send an offer, and enjoy fast, reliable shipping directly to your doorstep.',
		],
	},
	sell: {
		icons: [SellIcon1, SellIcon2, SellIcon3],
		title: ['List it', 'Sell it', 'Get Paid'],
		descriptions: [
			'Effortlessly list your luxury items for sale by uploading high-quality photos, adding detailed descriptions, and setting your desired price.',
			'Once your item is listed, connect with potential buyers through our platform. Respond to inquiries, negotiate offers, and finalize the sale with ease.',
			'Receive payment securely once the transaction is complete. Our payment system ensures you get your earnings promptly, ready to be transferred to your account.',
		],
	},
};

type Mode = 'buy' | 'sell';

export default function BuyAndSellSection() {
	const [mode, setMode] = React.useState<Mode>('buy');
	const [modeData, setModeData] = React.useState(data[mode]);

	const selectedClasses = 'bg-primary-700 rounded-full text-background-900';

	function changeMode(mode: Mode) {
		setMode(mode);
		setModeData(data[mode]);
	}

	return (
		<article className="pb-20 lg:px-24 md:px-10 flex flex-col items-center justify-center w-full">
			<div className="bg-background-900 font-SpaceGrotesk font-bold tracking-wider leading-normal py-1.5 px-2 rounded-full flex items-center text-white">
				<button
					className={`px-4 py-1.5 uppercase ${mode === 'buy' ? selectedClasses : ''} transition-all duration-300`}
					onClick={() => changeMode('buy')}
				>
					Buy
				</button>
				<button
					className={`px-4 py-1.5 uppercase ${mode === 'sell' ? selectedClasses : ''} transition-all duration-300`}
					onClick={() => changeMode('sell')}
				>
					Sell
				</button>
			</div>

			<p className="font-SFmedium text-sm md:text-lg text-center tracking-wide leading-normal w-8/12 py-8">
				The Luxehub is an online marketplace that connects buyers and sellers of
				luxury fashion items. With our app, you can explore, buy, and sell the
				finest preloved luxury goods with ease.
			</p>

			<div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full lg:px-44 py-6">
				<div className="w-1/2 h-96 p-4 bg-primary-900"></div>
				<div className="w-1/2 h-96 p-4 bg-secondary-900"></div>
				<div className="w-1/2 h-96 p-4 bg-background-900"></div>
			</div>
		</article>
	);
}

function BuyAndSellCard() {
	return <div className="w-1/2 h-96 p-4 bg-primary-900"></div>;
}
