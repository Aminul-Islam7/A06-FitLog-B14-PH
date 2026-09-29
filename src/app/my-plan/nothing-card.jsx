import { Button } from '@/components/ui/button';
import { Ghost } from 'lucide-react';
import Link from 'next/link';

export default function NothingCard() {
	return (
		<article className="bg-neutral-950 border-3 border-dashed rounded-xl h-100 p-6 text-center flex flex-col gap-2 justify-center items-center">
			<Ghost size={80} />
			<p className="font-bold font-display text-xl uppercase mt-2">Nothing Here Yet</p>
			<p className="text-muted-foreground text-xs mb-4">Browse the library and add a lift to get today moving.</p>
			<Link href="/#library-section">
				<Button size="lg" className="text-xs font-semibold">
					Go to workouts
				</Button>
			</Link>
		</article>
	);
}
