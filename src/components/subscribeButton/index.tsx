import styles from "./styles.module.css";

interface SubscribeButtonProps {
	priceId: string;
}

export function SubscribeButton(props: SubscribeButtonProps) {
	return <button className={styles.btnSubscribe}>Subscribe now</button>;
}
