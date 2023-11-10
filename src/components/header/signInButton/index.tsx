import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.css";
import React from "react";

export function SignInButton() {
	const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(true);

	return isUserLoggedIn ? (
		<button className={styles.btnLogin}>
			<FaGithub color="#04D361" className={styles.icon} />
			<span>samueldbferreira</span>
			<FiX color="#737380" className={styles.icon} />
		</button>
	) : (
		<button className={styles.btnLogin}>
			<FaGithub color="#EBA417" className={styles.icon} />
			<span>Sign in with GitHub</span>
		</button>
	);
}
