/// <reference types="vite-plugin-svgr/client" />

import BrandsSection from './components/BrandsSection';
import Header from './components/Header';
import ShoppingSection from './components/ShoppingSection';

function App() {
	return (
		<main>
			<Header />
			<BrandsSection />
			<ShoppingSection />
		</main>
	);
}

export default App;
