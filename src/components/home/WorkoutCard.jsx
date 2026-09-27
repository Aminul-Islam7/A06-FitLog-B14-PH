import Image from 'next/image';
import Link from 'next/link';
import { Clock3, Flame, Star } from 'lucide-react';

export default function WorkoutCard({ workout }) {
	return (
		<div key={workout.id} className="bg-card border rounded-2xl overflow-hidden">
			<div className="h-60 overflow-hidden flex items-center">
				<Image width={600} height={500} src={workout.image} alt={`$Picture of ${workout.name} Workout`}></Image>
			</div>
			<div className="p-6">
				<div className="space-y-3">
					<div className="flex gap-2 uppercase">
						{workout.muscleGroups.map((group, ind) => (
							<span key={ind} className="px-3 py-1 bg-primary text-[11px] font-bold text-background rounded-full">
								{group}
							</span>
						))}
					</div>
					<h3 className="text-lg font-display font-bold uppercase">{workout.name}</h3>
					<p className="text-xs text-muted-foreground">{workout.equipment}</p>
				</div>
				<div className="border-t pt-4 mt-5 flex gap-4 text-xs text-muted-foreground">
					<div className="flex items-center gap-1.5">
						<Clock3 size={14} />
						<span className="mt-0.5">{`${workout.duration} min`}</span>
					</div>
					<div className="flex items-center gap-1.5">
						<Flame size={14} />
						<span className="mt-0.5">{`${workout.caloriesBurned} kcal`}</span>
					</div>
					<div className="flex items-center gap-1.5">
						<Star size={14} />
						<span className="mt-0.5">{`${workout.rating}`}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
