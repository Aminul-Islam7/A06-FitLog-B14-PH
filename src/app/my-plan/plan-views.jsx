'use client';

import { TabsContent } from '@/components/ui/tabs';
import NothingCard from './nothing-card';
import { SavedDataContext } from '@/context/saved-data-provider';
import { SortContext } from '@/context/sort-provider';
import { useContext } from 'react';
import PlanCard from './plan-card';
import { PlanCardSkeleton } from './plan-card-skeleton';

export default function PlanViews({ workouts }) {
	const { plannedWorkouts, savedWorkouts, isLoaded } = useContext(SavedDataContext);
	const { sortType } = useContext(SortContext);

	let type;
	if (sortType === 'Duration') type = 'duration';
	else if (sortType === 'Calories') type = 'caloriesBurned';
	else if (sortType === 'Rating') type = 'rating';

	const sortedWorkouts = workouts.toSorted((a, b) => b[type] - a[type]);

	const sortedPlannedWorkouts = sortedWorkouts.filter(workout => plannedWorkouts.includes(workout.id));
	const sortedSavedWorkouts = sortedWorkouts.filter(workout => savedWorkouts.includes(workout.id));

	if (!isLoaded) {
		return (
			<section className="mt-2 ">
				<TabsContent value="plan" className="space-y-4">
					{Array.from({ length: 3 }).map((_, i) => (
						<PlanCardSkeleton key={i} />
					))}
				</TabsContent>
				<TabsContent value="saved" className="space-y-4">
					{Array.from({ length: 3 }).map((_, i) => (
						<PlanCardSkeleton key={i} />
					))}
				</TabsContent>
			</section>
		);
	}

	return (
		<section className="mt-2 ">
			<TabsContent value="plan" className="space-y-4">
				{sortedPlannedWorkouts.length ? sortedPlannedWorkouts.map(workout => <PlanCard key={workout.id} type="plan" workout={workout}></PlanCard>) : <NothingCard></NothingCard>}
			</TabsContent>
			<TabsContent value="saved" className="space-y-4">
				{sortedSavedWorkouts.length ? sortedSavedWorkouts.map(workout => <PlanCard key={workout.id} type="save" workout={workout}></PlanCard>) : <NothingCard></NothingCard>}
			</TabsContent>
		</section>
	);
}
