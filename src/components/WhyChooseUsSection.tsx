export default function WhyChooseUsSection() {
	return (
		<section className="text-center p-2 pt-10 lg:max-w-5xl lg:mx-auto">
			<h1 className="font-SpaceGrotesk font-semibold mb-2">Why Choose Us?</h1>
			<p className="font-SFlight text-sm md:text-md leading-relaxed tracking-wide text-background-700 my-6 md:w-8/12 md:mx-auto">
				LuxeHub offers a premium shopping experience with curated selections of
				high-end fashion, guaranteed authentic luxury items, and verified
				sellers.
			</p>
			<div className="flex flex-col gap-4 md:flex-row px-6">
				<Card
					title="CURATED SELECTION"
					subtitle="Discover our curated selection"
					content="Explore a handpicked collection of high-end fashion. Our experts bring
				you the latest trends and timeless classics."
				/>
				<Card
					title="AUTHENTIC LUXURY"
					subtitle="Experience Authentic Luxury"
					content="We guarantee genuine luxury products from the world’s most prestigious brands, ensuring you receive only the best."
				/>
				<Card
					title="VERIFIED SELLERS"
					subtitle="Buy from verified sellers"
					content="Each seller on Luxehub undergoes a rigorous verification process to ensure credibility and trustworthiness."
				/>
			</div>
		</section>
	);
}

function Card({
	title,
	subtitle,
	content,
}: {
	title: string;
	subtitle: string;
	content: string;
}) {
	return (
		<div className="p-4 border border-background-100 gap-2 text-start flex flex-col">
			<h2 className="uppercase font-SFmedium text-xs text-primary-700">
				{title}
			</h2>
			<h3 className="font-SFsemibold text-md leading-normal tracking-wide">
				{subtitle}
			</h3>
			<p className="text-background-700 text-sm">{content}</p>
		</div>
	);
}
