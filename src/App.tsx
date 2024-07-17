/// <reference types="vite-plugin-svgr/client" />

import BrandsSection from './components/BrandsSection';
import BuyAndSellSection from './components/BuyAndSellSection';
import Header from './components/Header';
import ShoppingSection from './components/ShoppingSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';

function App() {
	return (
		<main>
			<Header />
			<BrandsSection />
			<ShoppingSection />
			<BuyAndSellSection />
			<WhyChooseUsSection />
		</main>
	);
}

export default App;
