import About from "../../components/core/home/About";
// import Brands from "../components/core/home/Brands";
import HeroSection from "../../components/core/home/HeroSection";
import Services from "../../components/core/home/Services";

export default function Home() {
	return (
		<main>
			<HeroSection />
            <About/>
			<Services/>
			{/* <Brands/> */}
		</main>
	);
}
