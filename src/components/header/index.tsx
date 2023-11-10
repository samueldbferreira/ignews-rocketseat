"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoSVG from "../../assets/logo.svg";
import styles from "./styles.module.css";
import { SignInButton } from "./signInButton";

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
				<SignInButton />
			</div>
		</header>
	);
}
