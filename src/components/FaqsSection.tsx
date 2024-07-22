import Colors from '../theme/Colors';
import { ArrowCircleDown2, ArrowCircleRight2, Star1 } from 'iconsax-react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const faqs = [
	{
		question: 'How do I join the LuxeHub community?',
		answer:
			'Sign up for an account, customize your profile, and start shopping!',
	},
	{
		question: 'What are the benefits of shopping with the LuxeHub?',
		answer:
			'Access to premium shopping experience, verified sellers, and exclusive deals.',
	},
	{
		question:
			'What is the difference between the LuxeHub and other online retailers?',
		answer:
			'The LuxeHub offers a premium shopping experience, guaranteed authentic luxury items, and verified sellers.',
	},
	{
		question: 'How can I find the best deals for my favorite brands?',
		answer:
			'Use the search bar, filter options, and compare prices to find the best deals.',
	},
	{
		question: 'Can I return or exchange items at the LuxeHub?',
		answer:
			'Yes, you can return or exchange items within 30 days of purchase. Please note that returns and exchanges must be made within 24 hours of receiving the item.',
	},
	{
		question: 'What is the shipping and delivery process?',
		answer:
			'Standard shipping, with a 2-day turnaround, will be provided for purchases over $10',
	},
];

export default function FaqsSection() {
	const isMobile = useMediaQuery({ maxWidth: 900 });
	const [selectedFaq, setSelectedFaq] = React.useState(faqs[0]);

	return (
		<section className="bg-primary-100 md:w-10/12 mx-auto flex justify-between p-4 md:pb-20 md:pt-10 md:px-10 gap-24">
			<div className="w-full">
				<h1
					className={`font-SpaceGrotesk text-2xl font-semibold ${!isMobile && 'pl-6'}`}
				>
					FAQs
				</h1>
				<div
					className={`p-4 mt-3 gap-3 flex flex-col ${isMobile && 'bg-primary-900 p-4 mt-3 gap-3 flex flex-col'}`}
				>
					{faqs.map((faq, index) => (
						<FAQ
							question={faq.question}
							faq={selectedFaq}
							isSelected={selectedFaq.question === faq.question}
							onClick={() => setSelectedFaq(faqs[index])}
						/>
					))}
				</div>
			</div>
			{!isMobile && (
				<div className="w-full">
					<h1 className="font-SpaceGrotesk text-2xl font-semibold pb-4">
						Answer
					</h1>
					<p className="flex flex-col gap-4 bg-primary-900 min-h-full p-10">
						<Star1 variant="Bold" size={32} color={Colors.white} />
						<span className="text-white font-SFmedium tracking-wide leading-relaxed w-9/12">
							{selectedFaq.answer}
						</span>
					</p>
				</div>
			)}
		</section>
	);
}

function FAQ({
	question,
	faq,
	onClick,
	isSelected = false,
}: {
	question: string;
	faq?: { question: string; answer: string };
	onClick: () => void;
	isSelected?: boolean;
}) {
	const isMobile = useMediaQuery({ maxWidth: 900 });

	return (
		<>
			<div
				onClick={onClick}
				className={`flex items-center justify-between ${isSelected ? 'bg-background-900' : 'bg-primary-100'} p-2 shadow-sm`}
			>
				<h2
					className={`font-SFlight tracking-wide leading-normal text-sm md:text-md w-10/12 ${isSelected ? 'text-white' : 'text-background-900'}`}
				>
					{question}
				</h2>
				<button>
					{isSelected && isMobile && (
						<ArrowCircleDown2 size={20} variant="Bold" color={Colors.white} />
					)}
					{isSelected && !isMobile && (
						<ArrowCircleRight2 size={20} variant="Bold" color={Colors.white} />
					)}
				</button>
			</div>
			{isMobile && isSelected && (
				<p className="text-white text-sm font-SFlight tracking-wide">
					{faq?.answer}
				</p>
			)}
		</>
	);
}
