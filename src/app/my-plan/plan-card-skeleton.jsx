import { Skeleton } from '@/components/ui/skeleton';

export function PlanCardSkeleton() {
	return (
		<article className="bg-card border border-border p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 items-center gap-6">
			{/* Left side: Image + info */}
			<div className="flex flex-col sm:flex-row items-center gap-4">
				{/* Thumbnail */}
				<Skeleton className="w-full sm:w-30 aspect-square rounded-lg shrink-0" />

				<div className="space-y-2 text-center sm:text-left w-full">
					{/* Title */}
					<Skeleton className="h-5 w-40 rounded-md mx-auto sm:mx-0" />
					{/* Equipment */}
					<Skeleton className="h-3.5 w-24 rounded-md mx-auto sm:mx-0" />

					{/* Stats */}
					<div className="mt-4 flex justify-center sm:justify-start gap-4">
						<Skeleton className="h-3.5 w-14 rounded-md" />
						<Skeleton className="h-3.5 w-16 rounded-md" />
						<Skeleton className="h-3.5 w-10 rounded-md" />
					</div>
				</div>
			</div>

			{/* Right side: Action buttons */}
			<div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center sm:justify-end gap-3">
				<Skeleton className="h-8 w-full sm:w-22 rounded-full" />
				<Skeleton className="h-8 w-full sm:w-28 rounded-full" />
				<Skeleton className="h-5 w-5 rounded-md" />
			</div>
		</article>
	);
}
