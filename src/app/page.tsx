import type { Metadata } from "next";
import Image from "next/image";
import { stripe } from "@/services/stripe";
import { SubscribeButton } from "@/components/subscribeButton";
import mulherSVG from "../assets/mulher.svg";
import styles from "./home.module.css";

export const metadata: Metadata = {
	title: "Home | ig.news",
};

export async function getPriceData() {
	const price = await stripe.prices.retrieve("price_1OAjUrH2CiEcrMBvZfvu3Kpv");

	if (!price.unit_amount) {
		throw new Error("Failed to fetch price");
	}

	const product = {
		priceId: price.id,
		amount: new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		}).format(price.unit_amount / 100),
	};

	return product;
}

export default async function Home() {
	const { priceId, amount } = await getPriceData();

	return (
		<main className={styles.container}>
			<section>
				<span className={styles.welcome}>👏 Hey, welcome</span>
				<h1 className={styles.heading}>
					News about <br /> the <strong>React</strong> world
				</h1>
				<p className={styles.text}>
					Get acess to all the publications
					<br />
					<strong>for {amount} month</strong>
				</p>
				<SubscribeButton priceId={priceId} />
			</section>
			<Image src={mulherSVG} alt="Girl coding" />
		</main>
	);
}
