import React from 'react';
import Logo from '/assets/images/logo.png';
import { LuArrowUpRight } from 'react-icons/lu';
import Apple from '/src/assets/svgs/apple.svg?react';
import Google from '/src/assets/svgs/google.svg?react';
import { useMediaQuery } from 'react-responsive';
import { HambergerMenu } from 'iconsax-react';

export default function Header() {
	const isMobile = useMediaQuery({ maxWidth: 900 });

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<header
			className={`bg-primary-100 min-h-screen min-w-screen ${isMobile ? 'bg-heroMobilePng' : 'bg-heroPng'} bg-center-top bg-no-repeat bg-top`}
		>
			<div className="flex justify-between items-center px-6 py-6 pt-12 md:pt-4 fixed w-full">
				<div className="bg-black inline-block py-1.5 px-5 rounded-full">
					<img src={Logo} alt="LuxeHub Logo" className="" width={80} />
				</div>

				{!isMobile && (
					<div className="items-center bg-white flex gap-8 rounded-full font-SFmedium py-4 px-8 text-xs md:text-md uppercase text-textColor border border-background-900 tracking-wide leading-normal">
						<p className="text-primary-900">
							<a href="">Home</a>
						</p>
						<p className="">
							<a href="">Categories</a>
						</p>
						<p>
							<a href="">Features</a>
						</p>
						<p>
							<a href="">Faqs</a>
						</p>
					</div>
				)}

				<div className="flex gap-2 items-center">
					<button
						className={`flex uppercase text-xs md:text-sm font-SFsemibold items-center rounded-full border border-background-900 ${!isMobile ? 'px-4' : 'px-1'} py-1 gap-2 bg-white tracking-tight`}
					>
						{!isMobile && <p>Get the app</p>}
						<div className="bg-background-900 p-1 rounded-full flex items-center justify-center">
							<LuArrowUpRight color="#fff" size={16} />
						</div>
					</button>
					{isMobile && (
						<div className="relative">
							<button
								className="rounded-full border border-background-900 p-1 bg-white"
								onClick={() => setIsMenuOpen(p => !p)}
							>
								<HambergerMenu color="#000" variant="Bold" size={22} />
							</button>

							{isMenuOpen && (
								<ul className="bg-white border border-background-300 p-4 gap-4 absolute right-0 top-10 z-50 font-SFlight text-xs leading-normal tracking-wide flex flex-col uppercase text-background-900">
									<li className="text-primary-900">
										<a href="">Home</a>
									</li>
									<li>
										<a href="">Categories</a>
									</li>
									<li>
										<a href="">Features</a>
									</li>
									<li>
										<a href="">FAQs</a>
									</li>
								</ul>
							)}
						</div>
					)}
				</div>
			</div>

			<div
				className={`justify-center items-center flex-col flex text-center w-full ${isMobile && '-mt-8'}`}
			>
				<div className="font-SpaceGrotesk uppercase tracking-tighter text-2xl md:text-4xl pt-24 leading-normal">
					<h1 className="">
						COMFORTABLE {isMobile && <br />} LUXURY <br />
						<span
							className={`inline-block font-bold tracking-tight ${isMobile ? 'text-primary-900' : 'text-background-900'}`}
						>
							Shopping
						</span>
					</h1>
				</div>
				<p className="w-10/12 md:w-5/12 lg:w-3/12 xl:2/12 text-center text-sm md:text-md font-thin pt-2 italic">
					We help luxury items find their new homes. Some luxury items are
					waiting for your own home!
				</p>
				<div className="flex flex-row gap-2 items-center justify-center text-white py-2">
					<Button>
						<Apple height={isMobile ? 15 : 30} width={'auto'} />
					</Button>
					<Button>
						<Google height={isMobile ? 15 : 30} width={'auto'} />
					</Button>
				</div>
			</div>
		</header>
	);
}

export function Button({
	children,
	classes,
	onClick,
}: {
	children: React.ReactNode;
	classes?: string;
	onClick?: () => void;
}) {
	return (
		<button
			onClick={onClick}
			className={`${classes} bg-background-900 px-8 py-2 cursor-pointer`}
		>
			{children}
		</button>
	);
}
