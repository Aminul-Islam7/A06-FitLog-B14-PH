'use client';

import { TabsContent } from '@/components/ui/tabs';
import NothingCard from './nothing-card';
import { SavedDataContext } from '@/context/saved-data-provider';
import { SortContext } from '@/context/sort-provider';
import { useContext } from 'react';
import WorkoutCard from './workout-card';

export default function PlanViews({ workouts }) {
	const { plannedWorkouts, savedWorkouts } = useContext(SavedDataContext);
	const { sortType } = useContext(SortContext);

	let type;
	if (sortType === 'Duration') type = 'duration';
	else if (sortType === 'Calories') type = 'caloriesBurned';
	else if (sortType === 'Rating') type = 'rating';

	const sortedWorkouts = workouts.toSorted((a, b) => b[type] - a[type]);

	const sortedPlannedWorkouts = sortedWorkouts.filter(workout => plannedWorkouts.includes(workout.id));
	const sortedSavedWorkouts = sortedWorkouts.filter(workout => savedWorkouts.includes(workout.id));

	return (
		<section className="mt-2 ">
			<TabsContent value="plan" className="space-y-4">
				{sortedPlannedWorkouts.length ? sortedPlannedWorkouts.map(workout => <WorkoutCard key={workout.id} type="plan" workout={workout}></WorkoutCard>) : <NothingCard></NothingCard>}
			</TabsContent>
			<TabsContent value="saved" className="space-y-4">
				{sortedSavedWorkouts.length ? sortedSavedWorkouts.map(workout => <WorkoutCard key={workout.id} type="save" workout={workout}></WorkoutCard>) : <NothingCard></NothingCard>}
			</TabsContent>
		</section>
	);
}
