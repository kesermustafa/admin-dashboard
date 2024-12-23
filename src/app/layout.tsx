import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Header from "@/app/components/header";


const geistSans = localFont ({
	src: "./assets/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont ({
	src: "./assets/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Admin Dashboard",
	description: "Admin Dashboard next app",
};

export default function RootLayout ({
	                                    children,
                                    }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
		>
		
		<div className="flex min-h-screen ">
			<Navbar/>
			
			<div className="flex flex-col w-full">
				<Header/>
				
				<main className='flex-1 bg-gray-200'>{children}</main>
			</div>
		
		</div>
		
		</body>
		</html>
	);
}
