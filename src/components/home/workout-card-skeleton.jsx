import { Skeleton } from '@/components/ui/skeleton';

export default function WorkoutCardSkeleton() {
	return (
		<article className="border border-border bg-card rounded-2xl overflow-hidden">
			<Skeleton className="h-60 w-full rounded-none" />

			<div className="p-6">
				<div className="space-y-3">
					<div className="flex gap-2">
						<Skeleton className="h-6 w-14 rounded-full" />
						<Skeleton className="h-6 w-12 rounded-full" />
					</div>

					<div className="space-y-2">
						<Skeleton className="h-6 w-3/4 rounded-md" />
						<Skeleton className="h-3.5 w-1/3 rounded-md" />
					</div>
				</div>

				<div className="border-t border-border pt-5 mt-6 flex gap-4">
					<div className="flex items-center gap-1.5">
						<Skeleton className="h-3.5 w-3.5 rounded-full" />
						<Skeleton className="h-3.5 w-12 rounded-md" />
					</div>
					<div className="flex items-center gap-1.5">
						<Skeleton className="h-3.5 w-3.5 rounded-full" />
						<Skeleton className="h-3.5 w-14 rounded-md" />
					</div>
					<div className="flex items-center gap-1.5">
						<Skeleton className="h-3.5 w-3.5 rounded-full" />
						<Skeleton className="h-3.5 w-8 rounded-md" />
					</div>
				</div>
			</div>
		</article>
	);
}
