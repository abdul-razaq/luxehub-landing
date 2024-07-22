/// <reference types="vite-plugin-svgr/client" />

import { Messages2 } from 'iconsax-react';
import BrandsSection from './components/BrandsSection';
import BuyAndSellSection from './components/BuyAndSellSection';
import Header, { Button } from './components/Header';
import ShoppingSection from './components/ShoppingSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import GetIntoTheHubSection from './components/GetIntoTheHubSection';
import { useMediaQuery } from 'react-responsive';
import FaqsSection from './components/FaqsSection';

function App() {
	const isMobile = useMediaQuery({ minWidth: 900 });

	return (
		<main className="relative">
			<Header />
			<BrandsSection />
			<ShoppingSection />
			<BuyAndSellSection />
			<WhyChooseUsSection />
			<GetIntoTheHubSection />
			<FaqsSection />

			<Button classes="flex items-center gap-2 rounded-full fixed bottom-10 right-10">
				<Messages2 color="white" size={20} variant="Bold" />
				{isMobile && (
					<span className="text-white font-SFlight tracking-wide leading-normal text-md">
						Support chat
					</span>
				)}
			</Button>
		</main>
	);
}

export default App;
