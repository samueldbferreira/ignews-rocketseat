"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoSVG from "../../assets/logo.svg";
import githubSVG from "../../assets/github.svg";
import styles from "./styles.module.css";

export function Header() {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Image src={logoSVG} alt="ig.news" className={styles.logo} />
				<nav className={styles.nav}>
					<Link className={pathname === "/" ? styles.active : ""} href="/">
						Home
					</Link>
					<Link
						className={pathname === "/posts" ? styles.active : ""}
						href="/posts"
					>
						Posts
					</Link>
				</nav>
				<button className={styles.btnLogin}>
					<Image src={githubSVG} alt="GitHub" />
					<span>Sign in with GitHub</span>
				</button>
			</div>
		</header>
	);
}
