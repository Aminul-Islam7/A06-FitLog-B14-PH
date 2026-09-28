import { Inter, Oswald } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SavedDataProvider from '@/context/saved-data-provider';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
});

const oswald = Oswald({
	subsets: ['latin'],
	variable: '--font-oswald',
	display: 'swap',
});

export const metadata = {
	title: 'FITLOG',
	description: `FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.`,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`dark ${inter.variable} ${oswald.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<SavedDataProvider>
					<Navbar></Navbar>
					{children}
					<Footer></Footer>
					<Toaster richColors position="bottom-right" theme="dark" />
				</SavedDataProvider>
			</body>
		</html>
	);
}

