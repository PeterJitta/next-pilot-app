import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<p>VERCEL_ENV: {process.env.VERCEL_ENV ?? "N/A"}</p>
			<p>VERCEL_URL: {process.env.VERCEL_URL ?? "N/A"}</p>
			<p>NEXT_PUBLIC_ENV: {process.env.NEXT_PUBLIC_ENV ?? "N/A"}</p>
		</main>
	);
}
