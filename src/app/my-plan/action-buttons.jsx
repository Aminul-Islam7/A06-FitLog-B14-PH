'use client';

import ActionButton from '@/components/action-button';
import { X, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SavedDataContext } from '@/context/saved-data-provider';
import { useContext } from 'react';

export default function ActionButtons({ workout, type }) {
	const { plannedWorkouts, savedWorkouts, doneWorkouts } = useContext(SavedDataContext);

	const isPlanned = plannedWorkouts.includes(workout.id);
	const isSaved = savedWorkouts.includes(workout.id);
	const isDone = doneWorkouts.includes(workout.id);

	return (
		<div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2 justify-self-center sm:justify-self-end">
			<Link href={`/workouts/${workout.id}`} className="w-full">
				<Button variant="outline" className="text-xs w-full">
					View Details
				</Button>
			</Link>
			{type === 'plan' && (
				<ActionButton action="done" workoutId={workout.id} variant={isDone ? 'secondary' : 'default'} className="w-full sm:w-auto text-xs font-semibold">
					{isDone ? (
						<>
							<Check className="mr-1" />
							<span>Marked as Done</span>
						</>
					) : (
						<>Mark as Done</>
					)}
				</ActionButton>
			)}
			<ActionButton action={type} workoutId={workout.id} variant="ghost" size="icon" className="w-full sm:w-auto">
				<X size={60} className="text-muted-foreground" />
			</ActionButton>
		</div>
	);
}
