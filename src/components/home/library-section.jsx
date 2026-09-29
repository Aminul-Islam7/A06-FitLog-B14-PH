import WorkoutCardSkeleton from './workout-card-skeleton';
import { Suspense } from 'react';
import WorkoutGrid from './workout-grid';

export function GridSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
			{Array.from({ length: 12 }).map((_, index) => (
				<WorkoutCardSkeleton key={index} />
			))}
		</div>
	);
}

export default async function LibrarySection() {
	return (
		<section id="library-section" className="mx-6 scroll-mt-20">
			<div className="container mx-auto py-6">
				<h2 className="text-xl lg:text-3xl font-display font-bold uppercase text-center sm:text-left mb-1">The Library</h2>
				<p className="text-xs lg:text-base text-muted-foreground text-center sm:text-left">Twelve lifts covering every major muscle group.</p>

				<Suspense fallback={<GridSkeleton />}>
					<WorkoutGrid />
				</Suspense>
			</div>
		</section>
	);
}
