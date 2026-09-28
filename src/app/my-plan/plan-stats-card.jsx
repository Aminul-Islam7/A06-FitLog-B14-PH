'use client';

import { SavedDataContext } from '@/context/saved-data-provider';
import { useContext } from 'react';

export default function PlanStatsCard({ workouts }) {
	const { plannedWorkouts } = useContext(SavedDataContext);

	const minutes = plannedWorkouts.reduce((acc, workout) => acc + workouts[workout - 1].duration, 0);

	const caloriesBurned = plannedWorkouts.reduce((acc, workout) => acc + workouts[workout - 1].caloriesBurned, 0);

	return (
		<article className="bg-card border grid grid-cols-3 py-5 sm:py-8 rounded-xl">
			<div className="pl-4 sm:pl-8 flex flex-col gap-2">
				<span className="text-xs text-muted-foreground">Exercises</span>
				<span className="text-2xl sm:text-4xl font-display font-bold text-primary">{plannedWorkouts.length}</span>
			</div>
			<div className="pl-4 sm:pl-8 flex flex-col gap-2 border-l">
				<span className="text-xs text-muted-foreground">Minutes</span>
				<span className="text-2xl sm:text-4xl font-display font-bold">{minutes}</span>
			</div>
			<div className="pl-4 sm:pl-8 flex flex-col gap-2 border-l">
				<span className="text-xs text-muted-foreground">Calories</span>
				<span className="text-2xl sm:text-4xl font-display font-bold">{caloriesBurned}</span>
			</div>
		</article>
	);
}
