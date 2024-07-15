import Nike from '../assets/svgs/brands/nike.svg?react';
import Prada from '../assets/svgs/brands/prada.svg?react';
import Givenchy from '../assets/svgs/brands/givenchy.svg?react';
import Gucci from '../assets/svgs/brands/gucci.svg?react';
import TomFord from '../assets/svgs/brands/tom-ford.svg?react';
import Versace from '../assets/svgs/brands/versace.svg?react';

import { RiArrowRightUpLine } from 'react-icons/ri';

export default function BrandsSection() {
	return (
		<section className="text-center">
			<h2 className="font-SpaceGrotesk uppercase tracking-tight text-lg md:text-2xl leading-normal pb-6 pt-16">
				Top brands on luxehub
			</h2>

			<div className="flex flex-col md:flex-row justify-center items-center gap-4">
				<Brand>
					<Nike width={'auto'} height={'auto'} />
				</Brand>
				<Brand>
					<Prada width={'auto'} height={'auto'} />
				</Brand>
				<Brand>
					<Givenchy width={'auto'} height={'auto'} />
				</Brand>
				<Brand>
					<Gucci width={'auto'} height={'auto'} />
				</Brand>
				<Brand>
					<TomFord width={'auto'} height={'auto'} />
				</Brand>
				<Brand>
					<Versace width={'auto'} height={'auto'} />
				</Brand>
			</div>
		</section>
	);
}

function Brand({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-60 w-32 items-center justify-center flex border border-background-100 hover:w-80 hover:transition-all hover:duration-700 hover:ease-in-out group">
			<div className="p-4 group-hover:hidden">{children}</div>
			<div className="hidden group-hover:flex w-full h-full items-center justify-center">
				<button className="flex items-center justify-center bg-white shadow-md px-6 py-2">
					<p className="font-SFmedium text-md tracking-wide leading-normal uppercase">
						Open
					</p>
					<RiArrowRightUpLine />
				</button>
			</div>
		</div>
	);
}
