'use client';

import ActionButton from '@/components/action-button';
import { CalendarCheck, CalendarPlus2, Bookmark } from 'lucide-react';
import { SavedDataContext } from '@/context/saved-data-provider';
import { useContext } from 'react';

export default function ActionButtons({ workout }) {
	const { plannedWorkouts, savedWorkouts } = useContext(SavedDataContext);

	const isPlanned = plannedWorkouts.includes(workout.id);
	const isSaved = savedWorkouts.includes(workout.id);

	return (
		<div className="flex flex-col sm:flex-row gap-3">
			<ActionButton action="plan" workoutId={workout.id} size="lg" className="font-semibold text-sm" variant={isPlanned ? 'secondary' : 'default'} disabled={plannedWorkouts.length >= 5 && !isPlanned}>
				{isPlanned ? (
					<>
						<CalendarCheck className="mr-1" />
						Added to today&apos;s plan
					</>
				) : (
					<>
						<CalendarPlus2 className="mr-1" />
						Add to today&apos;s plan
					</>
				)}
			</ActionButton>
			<ActionButton action="save" workoutId={workout.id} variant={isSaved ? 'secondary' : 'outline'} size="lg" className="font-semibold text-sm">
				<Bookmark className={`mr-1 ${isSaved && 'fill-foreground'}`} />
				{isSaved ? 'Saved for later' : 'Save for later'}
			</ActionButton>
		</div>
	);
}
