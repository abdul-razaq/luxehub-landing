import Nike from '../assets/svgs/brands/nike.svg?react';
import Prada from '../assets/svgs/brands/prada.svg?react';
import Givenchy from '../assets/svgs/brands/givenchy.svg?react';
import Gucci from '../assets/svgs/brands/gucci.svg?react';
import TomFord from '../assets/svgs/brands/tom-ford.svg?react';
import Versace from '../assets/svgs/brands/versace.svg?react';

import { RiArrowRightUpLine } from 'react-icons/ri';

export default function BrandsSection() {
	return (
		<section className="text-center w-full py-16 md:py-28">
			<h2 className="font-SpaceGrotesk uppercase tracking-tight text-lg md:text-2xl leading-normal">
				Top brands on luxehub
			</h2>

			<div className="items-center md:justify-center flex flex-row p-6 gap-4 md:gap-6 whitespace-nowrap overflow-x-scroll overflow-y-hidden md:whitespace-normal md:overflow-hidden no-scrollbar md:pt-16 pt-10">
				<Brand bgImage={'bg-nike'}>
					<Nike width={'auto'} height={'auto'} />
				</Brand>
				<Brand bgImage={'bg-prada'}>
					<Prada width={'auto'} height={'auto'} />
				</Brand>
				<Brand bgImage={'bg-givenchy'}>
					<Givenchy width={'auto'} height={'auto'} />
				</Brand>
				<Brand bgImage={'bg-gucci'}>
					<Gucci width={'auto'} height={'auto'} />
				</Brand>
				<Brand bgImage={'bg-tomFord'}>
					<TomFord width={'auto'} height={'auto'} />
				</Brand>
				<Brand bgImage={'bg-versace'}>
					<Versace width={'auto'} height={'auto'} />
				</Brand>
			</div>
		</section>
	);
}

function Brand({
	bgImage,
	children,
}: {
	bgImage: string;
	children: React.ReactNode;
}) {
	return (
		<div className="md:h-80 md:w-44 h-56 min-w-32 items-center justify-center flex border border-background-100 hover:w-full md:hover:w-96 hover:transition-all hover:duration-700 hover:ease-in-out group">
			<div className="p-4 group-hover:hidden">{children}</div>
			<div
				className={`hidden group-hover:flex w-full h-full items-center justify-center ${bgImage} bg-no-repeat bg-cover bg-center`}
			>
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
