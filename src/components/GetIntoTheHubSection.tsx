import { FaApple, FaGooglePlay } from 'react-icons/fa6';

export default function GetIntoTheHubSection() {
	return (
		<section className="lg:max-w-5xl lg:mx-auto flex flex-col items-center justify-center text-center px-6 py-20">
			<h1 className="font-SpaceGrotesk font-semibold">Get Into The Hub?</h1>
			<p className="font-SFlight text-sm md:text-md leading-relaxed tracking-wide text-background-700 my-2 md:w-8/12 md:mx-auto lg:w-8/12 lg:mx-auto">
				LuxeHub offers a premium shopping experience with curated selections of
				high-end fashion, guaranteed authentic luxury items, and verified
				sellers.
			</p>
			<div className="flex items-center gap-2 pt-2 pb-9">
				<button className="bg-primary-200 py-3 px-4">
					<FaApple size={20} />
				</button>
				<button className="bg-primary-200 py-3 px-4">
					<FaGooglePlay size={20} />
				</button>
			</div>
			<img src="/public/assets/images/phone.png" alt="phone" />
		</section>
	);
}
