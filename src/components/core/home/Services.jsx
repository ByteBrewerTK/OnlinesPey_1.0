import Img1 from "../../../assets/morphot.webp"
import Img2 from "../../../assets/recharge.webp"
import Img3 from "../../../assets/money_transfer.webp"
import img4 from "../../../assets/bbps.png"
import Img5 from "../../../assets/images.jpeg"
import Img6 from "../../../assets/pan-card-services.jpg"
const Services = () => {
	return (
		<section className="pb-12 pt-20 dark:bg-[#fFFF1] lg:pb-[90px] lg:pt-[120px]">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex flex-wrap -mx-4">
					<div className="w-full px-4">
						<div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
							<span className="block mb-2 text-lg font-semibold text-[#000000]">
							What We Provide You
							</span>
							<h2 className="mb-3 text-3xl font-bold leading-[1.2] text-[#FF00FF] sm:text-4xl md:text-[40px]">
								Our Services
							</h2>
							<p className="text-base text-body-color dark:text-[#00008B]">
								We are here to all payment solution by providing Best AEPS,DMT,Mobile Recharge,Bill Payment etc..
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap -mx-4">
					<ServiceCard
						title="AEPS"
						details="OnlinesPey Provide Aadhar Enabled Payment Solution, with highest commision.Including services Cash Withdrawal,Balance Enquire,Mini Statement"
						icon={
							// <svg
							// 	width="36"
							// 	height="36"
							// 	viewBox="0 0 36 36"
							// 	fill="none"
							// 	xmlns="http://www.w3.org/2000/svg"
							// >
							// 	<path
							// 		// d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
							// 		d=""
							// 		fill="white"
							// 	/>
							// </svg>
							<img src={Img1} alt="Aeps" width={"136px"} height={"136px"}/>
						}
					/>
					<ServiceCard
						title="Mobile Recharge"
						details="OnlinesPey Provide Moblie Recharge Services Here you can get better commission by recharging all company's mobile and DTH."
						icon={
							// <svg
							// 	width="36"
							// 	height="36"
							// 	viewBox="0 0 36 36"
							// 	fill="none"
							// 	xmlns="http://www.w3.org/2000/svg"
							// >
							// 	<path
							// 		fillRule="evenodd"
							// 		clipRule="evenodd"
							// 		d="M9.89195 14.625C10.9995 10.1252 13.769 7.875 18.1996 7.875C24.8458 7.875 25.6765 12.9375 28.9996 13.7812C31.2151 14.3439 33.1535 13.5002 34.815 11.25C33.7075 15.7498 30.9379 18 26.5073 18C19.8611 18 19.0304 12.9375 15.7073 12.0938C13.4918 11.5311 11.5535 12.3748 9.89195 14.625ZM1.58423 24.75C2.69174 20.2502 5.46132 18 9.89195 18C16.5381 18 17.3689 23.0625 20.692 23.9062C22.9075 24.4689 24.8458 23.6252 26.5073 21.375C25.3998 25.8748 22.6302 28.125 18.1996 28.125C11.5535 28.125 10.7227 23.0625 7.39963 22.2188C5.18405 21.6561 3.24576 22.4998 1.58423 24.75Z"
							// 		fill="white"
							// 	/>
							// </svg>
							<img src={Img2} alt="Mobile Recharge" width={"136px"} height={"136px"} />
						}
					/>
					<ServiceCard
						title="DMT"
						details="Direct Money Transfer (DMT) is a unique product that can be used to send money instantly to any Bank's account holder within India.
						"
						icon={
							<img src={Img3} alt="DMT" width={"136px"} height={"136px"} />
						}
					/>
					<ServiceCard
						title="BBPS"
						details="OnlinesPey provides electricity bill payment facility to All customers with better commission."
						icon={
							<img src={img4} alt="BBPS" width={"136px"} height={"136px"} />
						}
					/>
					<ServiceCard
						title="Micro ATM"
						details="OnlinesPey Micro ATM, you can give your customers the convenience of cash by using debit cards and credit cards."
						icon={
						
							<img src={Img5} alt="Micro" width={"136px"} height={"136px"} />
						}
					/>
					<ServiceCard
						title="PAN CARD"
						details="Through this facility you can apply for PAN card of your customer."
						icon={
							<img src={Img6} alt="Pan" width={"136px"} height={"136px"} />
						}
					/>
				</div>
			</div>
		</section>
	);
};

export default Services;

const ServiceCard = ({ icon, title, details }) => {
	return (
		<>
			<div className="w-full px-4 md:w-1/2 lg:w-1/3">
				<div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-[#1F2A37] md:px-7 xl:px-10">
					<div className="mb-8 flex w-fit items-center justify-center rounded-2xl bg-[#98AFC7] p-1">
						{icon}
					</div>
					<h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
						{title}
					</h4>
					<p className="text-body-color dark:text-[#9ca3af]">
						{details}
					</p>
				</div>
			</div>
		</>
	);
};
