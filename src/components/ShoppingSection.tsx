import Colors from '../theme/Colors';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ShoppingSection() {
	return (
		<article>
			<section className="pb-20">
				<div className="flex justify-between mb-6 px-4">
					<h2 className="font-SpaceGrotesk uppercase tracking-tight text-lg md:text-xl leading-normal">
						Shop Men's Wear
					</h2>
					<span className="flex gap-1 uppercase font-SFmedium text-sm items-center text-primary-900">
						<a href="/">check out</a>
						<FaArrowRightLong color={Colors.primary[900]} />
					</span>
				</div>

				<div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-full flex-wrap">
					<img src="/public/assets/images/shopping/men/men-1.png" alt="men-1" />
					<img src="/public/assets/images/shopping/men/men-2.png" alt="men-2" />
					<img src="/public/assets/images/shopping/men/men-3.png" alt="men-3" />
					<img src="/public/assets/images/shopping/men/men-4.png" alt="men-4" />
					<img src="/public/assets/images/shopping/men/men-5.png" alt="men-5" />
					<img src="/public/assets/images/shopping/men/men-6.png" alt="men-6" />
				</div>
			</section>

			<section>
				<div className="flex justify-between mb-6 px-4">
					<h2 className="font-SpaceGrotesk uppercase tracking-tight text-lg md:text-xl leading-normal">
						Shop Women's Wear
					</h2>
					<span className="flex gap-1 uppercase font-SFmedium text-sm items-center text-primary-900">
						<a href="/">check out</a>
						<FaArrowRightLong color={Colors.primary[900]} />
					</span>
				</div>

				<div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-full flex-wrap">
					<img
						src="/public/assets/images/shopping/women/women-1.png"
						alt="women-1"
					/>
					<img
						src="/public/assets/images/shopping/women/women-2.png"
						alt="women-2"
					/>
					<img
						src="/public/assets/images/shopping/women/women-3.png"
						alt="women-3"
					/>
					<img
						src="/public/assets/images/shopping/women/women-4.png"
						alt="women-4"
					/>
					<img
						src="/public/assets/images/shopping/women/women-5.png"
						alt="women-5"
					/>
					<img
						src="/public/assets/images/shopping/women/women-6.png"
						alt="women-6"
					/>
				</div>
			</section>
		</article>
	);
}
