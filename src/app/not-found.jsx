import Link from 'next/link';
import { Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<main className="min-h-[75vh] flex items-center justify-center px-6">
			<div className="max-w-md w-full text-center space-y-4">
				<div className="inline-flex ">
					<Dumbbell className="rotate-45 text-primary" size={48} />
				</div>

				<div className="space-y-6">
					<p className="text-md uppercase tracking-widest font-semibold text-primary">404 Not Found</p>
					<h1 className="text-4xl sm:text-5xl font-display font-bold uppercase tracking-wide text-foreground">Rep Missed</h1>
					<p className="text-muted-foreground leading-relaxed">The page or workout you&apos;re looking for doesn&apos;t exist, has been removed, or was never racked in the first place.</p>
				</div>

				<div className="pt-2">
					<Link href="/">
						<Button size="lg" className="font-semibold px-8">
							Back to Workouts
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
}
