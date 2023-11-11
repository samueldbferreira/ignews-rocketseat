import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.css";

export function SignInButton() {
	const { data: session, status } = useSession();

	return status === "authenticated" ? (
		<button className={styles.btnLogin} onClick={() => signOut()}>
			<FaGithub color="#04D361" className={styles.icon} />
			<span>{session.user?.name}</span>
			<FiX color="#737380" className={styles.icon} />
		</button>
	) : (
		<button className={styles.btnLogin} onClick={() => signIn("github")}>
			<FaGithub color="#EBA417" className={styles.icon} />
			<span>Sign in with GitHub</span>
		</button>
	);
}
