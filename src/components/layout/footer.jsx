import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="w-full border-t backdrop-blur-md px-6 py-12 mt-6">
			<div className="container mx-auto flex items-center justify-between">
				{/* Brand Logo */}
				<Link href="/" className="flex items-center gap-2">
					<Image width={20} height={20} src="/icon.svg" alt="FitLog Icon" priority />
					<span className="font-display text-md font-bold tracking-wider text-foreground">FITLOG</span>
				</Link>
				<p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
			</div>
		</footer>
	);
}
