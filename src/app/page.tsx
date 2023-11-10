import type { Metadata } from "next";
import Image from "next/image";
import { SubscribeButton } from "@/components/subscribeButton";
import mulherSVG from "../assets/mulher.svg";
import styles from "./home.module.css";

export const metadata: Metadata = {
	title: "Home | ig.news",
};

export default function Home() {
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
					<strong>for $9.90 month</strong>
				</p>
				<SubscribeButton />
			</section>
			<Image src={mulherSVG} alt="Girl coding" />
		</main>
	);
}
