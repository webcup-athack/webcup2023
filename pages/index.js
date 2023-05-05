import dynamic from "next/dynamic";
import Head from "next/head";

import CardSliderOne from "../components/common/sliders/card/card-slider-one";
import TextSliderTwo from "../components/common/sliders/text/text-slider-two";
import HeroSection from "../components/home-three/hero-section";
import NewsLetter from "../components/home-three/news-letter";
import NftRoadMap from "../components/home-three/nft-roadmap";
import Team from "../components/home-three/Team";
import { APP_NAME } from "../config";
import ClientSliderOne from "./../components/common/sliders/client/client-slider-one";

const FilterGalarryOne = dynamic(() => import("../components/common/filter-gallary/filter-gallary-one"), {
	ssr: false,
});

export default function IndexThree() {
	return (
		<div style={{
			backgroundColor: 'transparent'
		}}>
			<Head>
				<title>{APP_NAME} - Accueil</title>
			</Head>
			<HeroSection />
			{/* <CardSliderOne /> */}
			{/* <FilterGalarryOne /> */}
			{/* <h1>Nos partenaires</h1> */}
			<NftRoadMap />
			<Team />
			<ClientSliderOne />
			{/* <NewsLetter /> */}
		</div>
	);
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
