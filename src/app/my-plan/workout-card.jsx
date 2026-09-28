import ActionButton from '@/components/action-button';
import { Clock3, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import ActionButtons from './action-buttons';

export default function WorkoutCard({ workout, type }) {
	return (
		<article className="bg-card border p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 items-center gap-6">
			<div className="flex flex-col sm:flex-row items-center gap-4">
				<Image width={400} height={400} src={workout.image} className="w-full sm:w-30 rounded-lg" alt={`Picture of ${workout.name} Workout`}></Image>
				<div className="space-y-2 text-center sm:text-left">
					<h3 className="text-lg font-display font-bold uppercase">{workout.name}</h3>
					<p className="text-xs text-muted-foreground">{workout.equipment}</p>
					<div className="mt-4 flex gap-4 text-xs text-muted-foreground">
						<div className="flex items-center gap-1.5">
							<Clock3 size={14} className="text-primary" />
							<span className="mt-0.5">{`${workout.duration} min`}</span>
						</div>
						<div className="flex items-center gap-1.5">
							<Flame size={14} className="text-primary" />
							<span className="mt-0.5">{`${workout.caloriesBurned} kcal`}</span>
						</div>
						<div className="flex items-center gap-1.5">
							<Star size={14} className="text-primary" />
							<span className="mt-0.5">{`${workout.rating}`}</span>
						</div>
					</div>
				</div>
			</div>
			<ActionButtons workout={workout} type={type}></ActionButtons>
		</article>
	);
}
