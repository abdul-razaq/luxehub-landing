/// <reference types="vite-plugin-svgr/client" />

import { Messages2 } from 'iconsax-react';
import BrandsSection from './components/BrandsSection';
import BuyAndSellSection from './components/BuyAndSellSection';
import Header, { Button } from './components/Header';
import ShoppingSection from './components/ShoppingSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';

function App() {
	return (
		<main className="relative">
			<Header />
			<BrandsSection />
			<ShoppingSection />
			<BuyAndSellSection />
			<WhyChooseUsSection />

			<Button classes="flex items-center gap-2 rounded-full fixed bottom-10 right-10">
				<Messages2 color="white" size={20} variant="Bold" />
				<span className="text-white font-SFlight tracking-wide leading-normal text-md">
					Support chat
				</span>
			</Button>
		</main>
	);
}

export default App;
