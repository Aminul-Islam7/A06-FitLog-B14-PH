'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Navbar({ planCount = 0, savedCount = 0 }) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const isLinkActive = href => pathname === href;

	const navLinks = [
		{ name: 'Workouts', href: '/', active: isLinkActive('/') },
		{ name: 'My Plan', href: '/my-plan', active: isLinkActive('/my-plan') },
	];

	const activeClass = 'text-primary bg-primary/10';

	return (
		<nav className="sticky top-0 z-50 w-full border-b backdrop-blur-md px-4 py-3.5 sm:px-6">
			<div className="container mx-auto flex items-center justify-between">
				{/* Brand Logo */}
				<Link href="/" className="flex items-center gap-2">
					<Image width={24} height={24} src="/icon.svg" alt="FitLog Icon" priority />
					<span className="font-display text-xl font-extrabold tracking-wider text-foreground">FITLOG</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-2">
					{navLinks.map(link => (
						<Link key={link.href} href={link.href} className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${link.active ? activeClass : 'text-muted-foreground hover:text-foreground'}`}>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Desktop Badges */}
				<div className="hidden md:flex items-center gap-4">
					<Link href="/my-plan" className="text-xs font-semibold text-neutral-300 hover:text-foreground transition-colors inline-flex items-center">
						Plan
						<span className="ml-2 h-5 min-w-5 px-1 rounded-full bg-primary text-primary-foreground text-[11px] inline-flex items-center justify-center font-bold">{planCount}</span>
					</Link>
					<Link href="/my-plan" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors inline-flex items-center">
						Saved
						<span className="ml-2 h-5 min-w-5 px-1 rounded-full border text-neutral-300 text-[11px] inline-flex items-center justify-center font-bold">{savedCount}</span>
					</Link>
				</div>

				{/* Mobile Navigation */}
				<div className="flex md:hidden items-center gap-2">
					<Link href="/my-plan" className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 mr-1">
						<span className="h-5 min-w-5 px-1 rounded-full bg-primary text-primary-foreground text-[11px] inline-flex items-center justify-center font-bold">{planCount}</span>
					</Link>

					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger
							render={
								<Button variant="ghost" className="text-foreground hover:bg-white/5 h-9 w-9">
									<Menu />
								</Button>
							}
						></SheetTrigger>

						{/* Mobile Sidebar */}
						<SheetContent side="right" className="bg-card p-6 flex flex-col justify-between">
							<div className="space-y-6">
								{/* Moblie Brand Logo */}
								<SheetTitle className="flex items-center gap-2 font-display text-lg font-bold">
									<Image width={20} height={20} src="/icon.svg" alt="FitLog Icon" />
									FITLOG
								</SheetTitle>

								{/* Mobile Links */}
								<div className="flex flex-col gap-2">
									{navLinks.map(link => (
										<Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`p-4 rounded-lg text-md font-medium transition-colors ${link.active ? activeClass : 'text-muted-foreground hover:text-foreground'}`}>
											{link.name}
										</Link>
									))}
								</div>
							</div>

							{/* Mobile Plan Counters */}
							<div className="pt-4 flex flex-col gap-2">
								<Link href="/my-plan" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-3 rounded-lg bg-background text-md font-medium text-muted-foreground hover:text-foreground transition-colors">
									<span>Plan</span>
									<span className="h-6 min-w-6 p-1.5 rounded-full bg-primary text-primary-foreground text-[11px] inline-flex items-center justify-center font-bold">{planCount}</span>
								</Link>

								<Link href="/my-plan" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-3 rounded-lg bg-background text-md font-medium text-muted-foreground hover:text-foreground transition-colors">
									<span>Saved</span>
									<span className="h-6 min-w-6 p-1.5 rounded-full border text-neutral-300 text-[11px] inline-flex items-center justify-center font-bold">{savedCount}</span>
								</Link>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
