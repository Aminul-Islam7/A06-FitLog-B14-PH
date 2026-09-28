'use client';

import { useContext } from 'react';
import { Button } from './ui/button';
import { SavedDataContext } from '@/context/saved-data-provider';
import { toast } from 'sonner';

export default function ActionButton({ className, variant, action, workoutId, children, size }) {
	const { plannedWorkouts, setPlannedWorkouts, savedWorkouts, setSavedWorkouts, doneWorkouts, setDoneWorkouts } = useContext(SavedDataContext);

	function handleAction() {
		switch (action) {
			case 'plan':
				if (!plannedWorkouts.find(workout => workout === workoutId)) {
					setPlannedWorkouts([...plannedWorkouts, workoutId]);
					toast.success('Workout added to your plan.');
				} else {
					const newPlannedWorkouts = plannedWorkouts.filter(workout => workout !== workoutId);
					setPlannedWorkouts(newPlannedWorkouts);
					toast.info('Workout removed from your plan.');
				}
				break;

			case 'save':
				if (!savedWorkouts.find(workout => workout === workoutId)) {
					setSavedWorkouts([...savedWorkouts, workoutId]);
					toast.success('Workout saved for later.');
				} else {
					const newSavedWorkouts = savedWorkouts.filter(workout => workout !== workoutId);
					setSavedWorkouts(newSavedWorkouts);
					toast.info('Removed from saved list.');
				}
				break;

			case 'done':
				if (!savedWorkouts.find(workout => workout === workoutId)) {
					setDoneWorkouts([...doneWorkouts, workoutId]);
					toast.success('Well done!');
				} else {
					const newDoneWorkouts = doneWorkouts.filter(workout => workout !== workoutId);
					setDoneWorkouts(newDoneWorkouts);
					toast.info('Workout marked as undone.');
				}
				break;
		}
	}

	return (
		<Button onClick={handleAction} className={className} variant={variant} size={size}>
			{children}
		</Button>
	);
}
