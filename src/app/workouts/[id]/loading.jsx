import { Skeleton } from '@/components/ui/skeleton';

export default function WorkoutDetailLoading() {
	return (
		<article className="mx-6 py-10">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				{/* Left Column: Back Link + Image */}
				<div className="space-y-4">
					{/* "Back to all workouts" */}
					<Skeleton className="h-4 w-36 rounded-md" />

					{/* Large Hero Image */}
					<Skeleton className="w-full aspect-square rounded-2xl border border-border" />
				</div>

				{/* Right Column: Details & Specs */}
				<div className="space-y-8">
					{/* Title & Description */}
					<div className="space-y-2.5">
						<Skeleton className="h-10 w-3/4 rounded-lg" />
						<Skeleton className="h-4 w-full rounded-md" />
					</div>

					{/* Muscle Groups Badges */}
					<div className="flex gap-2">
						<Skeleton className="h-6 w-16 rounded-full" />
						<Skeleton className="h-6 w-16 rounded-full" />
					</div>

					{/* Specs Card Table */}
					<div className="rounded-xl border bg-card divide-y divide-border">
						{Array.from({ length: 7 }).map((_, i) => (
							<div key={i} className="flex justify-between items-center px-6 py-4.5">
								<Skeleton className="h-3.5 w-24 rounded-md" />
								<Skeleton className="h-3.5 w-16 rounded-md" />
							</div>
						))}
					</div>

					{/* Instructions Header & List */}
					<div className="space-y-6 pt-2">
						<Skeleton className="h-5 w-32 rounded-md" />
						<div className="space-y-5">
							<Skeleton className="h-3.5 w-11/12 rounded-md" />
							<Skeleton className="h-3.5 w-3/4 rounded-md" />
							<Skeleton className="h-3.5 w-full rounded-md" />
							<Skeleton className="h-3.5 w-4/5 rounded-md" />
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-3">
						<Skeleton className="h-10 w-50 rounded-full" />
						<Skeleton className="h-10 w-36 rounded-full" />
					</div>
				</div>
			</div>
		</article>
	);
}
