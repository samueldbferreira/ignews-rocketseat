import { Header } from "@/components/header";
import { Roboto } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./providers/nextAuthProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={roboto.className}>
				<NextAuthProvider>
					<Header />
					{children}
				</NextAuthProvider>
			</body>
		</html>
	);
}
