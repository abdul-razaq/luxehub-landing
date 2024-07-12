/// <reference types="vite-plugin-svgr/client" />

import BrandsSection from './components/BrandsSection';
import Header from './components/Header';

function App() {
	return (
		<main>
			<Header />
			<section className="py-20 px-10">
				<BrandsSection />
			</section>
		</main>
	);
}

export default App;
