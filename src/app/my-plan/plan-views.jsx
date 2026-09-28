'use client';

import { TabsContent } from '@/components/ui/tabs';
import NothingCard from './nothing-card';
import { SavedDataContext } from '@/context/saved-data-provider';
import { useContext } from 'react';
import WorkoutCard from './workout-card';

export default function PlanViews({ workouts }) {
	const { plannedWorkouts, savedWorkouts } = useContext(SavedDataContext);

	return (
		<section className="mt-2">
			<TabsContent value="plan" className="space-y-4">
				{plannedWorkouts.length ? plannedWorkouts.map(workout => <WorkoutCard key={workout.id} type="plan" workout={workouts[workout - 1]}></WorkoutCard>) : <NothingCard></NothingCard>}
			</TabsContent>
			<TabsContent value="saved">{savedWorkouts.length ? savedWorkouts.map(workout => <WorkoutCard key={workout.id} type="save" workout={workouts[workout - 1]}></WorkoutCard>) : <NothingCard></NothingCard>}</TabsContent>
		</section>
	);
}
