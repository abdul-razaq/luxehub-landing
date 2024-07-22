import { useMediaQuery } from 'react-responsive';
import Logo from '../assets/svgs/logo-white.svg?react';
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';

export default function FooterSection() {
	const isMobile = useMediaQuery({ maxWidth: 900 });

	return (
		<section className="bg-background-900 w-full">
			<div className="flex flex-col md:flex-row gap-12 mt-20 p-4 md:py-20 md:justify-around">
				<div>
					<Logo width={isMobile ? 80 : 120} />
					<p className="text-sm tracking-wide leading-normal text-white md:pt-0 w-10/12">
						Another brief description of what Luxehub is all about can be used
						here. It should be short and precised.
					</p>
				</div>
				<div className="leading-normal tracking-wide text-md font-SFlight text-white">
					<ul className="flex flex-col gap-3">
						<h1 className="font-SFmedium pb-5 tracking-wide leading-normal">
							Pages
						</h1>
						<li>
							<a href="#">About us</a>
						</li>
						<li>
							<a href="#">Help</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div className="leading-normal tracking-wide text-md font-SFlight text-white">
					<ul className="flex flex-col gap-3">
						<h1 className="font-SFmedium pb-5 tracking-wide leading-normal">
							Legal
						</h1>
						<li>
							<a href="#">Terms of use</a>
						</li>
						<li>
							<a href="#">Licensing Agreement</a>
						</li>
						<li>
							<a href="#">Cookies Policy</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
					</ul>
				</div>
				<div className="gap-8 flex flex-col">
					<h1 className="font-SFmedium tracking-wide leading-normal text-white">
						Social Media
					</h1>
					<div className="flex gap-3 items-center">
						<div className="p-2 rounded-full border border-white">
							<BiLogoFacebook color="#fff" />
						</div>
						<div className="p-2 rounded-full border border-white">
							<BiLogoLinkedin color="#fff" />
						</div>
						<div className="p-2 rounded-full border border-white">
							<BiLogoTwitter color="#fff" />
						</div>
					</div>
				</div>
			</div>

			<hr />
			<p className="text-white text-xs p-4 pl-16">
				&copy; 2024 Luxehub, All Rights Reserved.
			</p>
		</section>
	);
}
