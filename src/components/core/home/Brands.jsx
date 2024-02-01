import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";

const Brands = () => {
	const logos = [
		"https://api.dicebear.com/7.x/pixel-art/svg",
		"https://api.dicebear.com/7.x/pixel-art/svg",
		"https://api.dicebear.com/7.x/pixel-art/svg",
		"https://api.dicebear.com/7.x/pixel-art/svg",
		"https://api.dicebear.com/7.x/pixel-art/svg",
		"https://api.dicebear.com/7.x/pixel-art/svg",
		// Add more logos here
	];
	const [settings] = useState({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
	});
	// Your component logic
	return (
		<div>
			<h2>Proudly Supported by</h2>
			<Slider {...settings}>
				{logos.map((logo, index) => (
					<div key={index} className="container flex items-center">
						<img
							src={logo}
							alt="logo"
							className="object-cover object-center border border-red-500"
							width={"200"}
							height={"100"}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};
export default Brands;
