import Colors from '../theme/Colors';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ShoppingSection() {
	return (
		<article className="lg:max-w-5xl lg:mx-auto">
			<section className="pb-20 py-28">
				<div className="flex justify-between px-8 lg:px-0 mb-10">
					<h2 className="font-SpaceGrotesk uppercase tracking-tight text-lg md:text-xl leading-normal">
						Shop Men's Wear
					</h2>
					<span className="flex gap-1 uppercase font-SFmedium text-sm items-center text-primary-900">
						<a href="/">check out</a>
						<FaArrowRightLong color={Colors.primary[900]} />
					</span>
				</div>

				<div className="flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center gap-2 max-w-full">
					<img
						src="/assets/images/shopping/men/men-1.png"
						alt="men-1"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/men/men-2.png"
						alt="men-2"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/men/men-3.png"
						alt="men-3"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/men/men-4.png"
						alt="men-4"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/men/men-5.png"
						alt="men-5"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/men/men-6.png"
						alt="men-6"
						className="w-24 md:w-36 lg:w-44"
					/>
				</div>
			</section>

			<section className="pb-20">
				<div className="flex justify-between px-8 lg:px-0 mb-10">
					<h2 className="font-SpaceGrotesk uppercase tracking-tight text-lg md:text-xl leading-normal">
						Shop Women's Wear
					</h2>
					<span className="flex gap-1 uppercase font-SFmedium text-sm items-center text-primary-900">
						<a href="/">check out</a>
						<FaArrowRightLong color={Colors.primary[900]} />
					</span>
				</div>

				<div className="flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center gap-2 max-w-full">
					<img
						src="/assets/images/shopping/women/women-1.png"
						alt="women-1"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/women/women-2.png"
						alt="women-2"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/women/women-3.png"
						alt="women-3"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/women/women-4.png"
						alt="women-4"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/women/women-5.png"
						alt="women-5"
						className="w-24 md:w-36 lg:w-44"
					/>
					<img
						src="/assets/images/shopping/women/women-6.png"
						alt="women-6"
						className="w-24 md:w-36 lg:w-44"
					/>
				</div>
			</section>
		</article>
	);
}
