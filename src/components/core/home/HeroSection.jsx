import Img1 from "../../../assets/Aadhaar-Enabled-Payments-System.jpg"


export default function HeroSection() {
	return (
		<header className="bg-white dark:bg-gray-800">
			<div className="container flex flex-col px-4 py-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8 md:py-16 md:flex-row md:items-center md:space-x-6">
				<div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
					<div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
						<button className="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
						<button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
						<button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
						<button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
					</div>

					<div className="max-w-lg md:mx-12 md:order-2">
						<h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
							OnlinesPey Best payment Solution
						</h1>
						<p className="mt-4 text-gray-600 dark:text-gray-300">
							India's Best AEPS, Mobile Recharge, DMT, DTH, BILL PAYMENT, BBPS provider.
							also providing all software solution inc.(website development, App development, B2B services etc..) 
						</p>
						<div className="mt-6">
							<a
								href="#"
								className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
							>
								Contact us
							</a>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center w-full h-96 md:w-1/2">
					<img
						className="object-cover w-full h-full max-w-2xl rounded-md"
						src={Img1}
						alt="Aeps 1 Photos"
					/>
				</div>
			</div>
		</header>
	);
}
