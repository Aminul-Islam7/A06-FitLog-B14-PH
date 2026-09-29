import { Skeleton } from '@/components/ui/skeleton';
import { PlanCardSkeleton } from './plan-card-skeleton';

export default function MyPlanLoading() {
	return (
		<section className="mx-6 py-10">
			<div className="container mx-auto space-y-7">
				{/* Header */}
				<div className="space-y-2">
					<Skeleton className="h-9 w-40 rounded-md" />
					<Skeleton className="h-4 w-72 rounded-md" />
				</div>

				{/* Stats Card */}
				<div className="rounded-xl border bg-card py-5 sm:py-8 px-4 sm:px-8 grid grid-cols-3 gap-6">
					{Array.from({ length: 3 }).map((_, i) => (
						<div key={i} className="space-y-2">
							<Skeleton className="h-3.5 w-20 rounded-md" />
							<Skeleton className="h-10 w-14 rounded-lg" />
						</div>
					))}
				</div>

				{/* Tab triggers and sort bar */}
				<div className="flex flex-col sm:flex-row justify-between items-center gap-3">
					<Skeleton className="h-8 w-54 rounded-lg" />
					<Skeleton className="h-8 w-32 rounded-lg" />
				</div>

				{/* List of Plan Card Skeletons */}
				<div className="space-y-4">
					{Array.from({ length: 3 }).map((_, i) => (
						<PlanCardSkeleton key={i} />
					))}
				</div>
			</div>
		</section>
	);
}
