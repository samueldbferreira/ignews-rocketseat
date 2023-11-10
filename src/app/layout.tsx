import { Roboto } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={roboto.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
