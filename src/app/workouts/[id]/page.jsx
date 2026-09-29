import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import ActionButtons from './action-buttons';
import Link from 'next/link';

export async function generateStaticParams() {
	try {
		const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
			next: { revalidate: 3600 },
		});

		if (!res.ok) {
			console.error(`Failed to fetch workout list with status: ${res.status}`);
			return [];
		}

		const workouts = await res.json();

		return workouts.map(workout => ({ id: String(workout.id) }));
	} catch (error) {
		console.error('Network or parsing error in generateStaticParams:', error);
		return [];
	}
}
async function getWorkout(id) {
	try {
		// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
		// await delay(5000);
		const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
			next: { revalidate: 3600 },
		});

		if (!res.ok) {
			console.error(`Failed to fetch workout list with status: ${res.status}`);
			return null;
		}

		return await res.json();
	} catch (error) {
		console.error(`Error fetching workout ${id}:`, error);
		return null;
	}
}

export default async function WorkoutDetailPage({ params }) {
	const { id } = await params;
	const workout = await getWorkout(id);

	if (!workout) notFound();

	return (
		<article className="mx-6 py-10">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
				<div className="space-y-4">
					<Link href="/#library-section" className="text-sm text-muted-foreground hover:text-foreground transition-colors ease-in-out flex items-center">
						<ArrowLeft className="mr-2" size={20} /> Back to all workouts
					</Link>
					<Image className="rounded-xl" width={800} height={800} src={workout.image} alt={`$Picture of ${workout.name} Workout`}></Image>
				</div>
				<div className="space-y-4">
					<h1 className="text-2xl lg:text-4xl font-display font-bold uppercase">{workout.name}</h1>
					<p className="text-sm lg:text-base text-muted-foreground">{workout.description}</p>
					<div className="flex gap-2 uppercase">
						{workout.muscleGroups.map((group, ind) => (
							<span key={ind} className="px-3 py-1 bg-primary text-[11px] font-bold text-background rounded-full">
								{group}
							</span>
						))}
					</div>
					<div className="bg-card border divide-y divide-border rounded-xl w-full font-medium my-8">
						<div className="flex justify-between items-center text-sm py-4 px-6">
							<span className="text-muted-foreground font-bold uppercase">Equipment</span>
							<span>{workout.equipment}</span>
						</div>
						<div className="flex justify-between items-center text-sm py-4 px-6">
							<span className="text-muted-foreground font-bold uppercase">Difficulty</span>
							<span>{workout.difficulty}</span>
						</div>
						<div className="flex justify-between items-center text-sm py-4 px-6">
							<span className="text-muted-foreground font-bold uppercase">Sets</span>
							<span>{workout.sets}</span>
						</div>
						<div className="flex justify-between items-center text-sm py-4 px-6">
							<span className="text-muted-foreground font-bold uppercase">Reps</span>
							<span>{workout.reps}</span>
						</div>
						<div className="flex justify-between items-center text-sm py-4 px-6">
							<span className="text-muted-foreground font-bold uppercase">Duration</span>
							<span>{workout.duration}</span>
						</div>
						<div className="flex justify-between items-center text-sm py-4 px-6">
							<span className="text-muted-foreground font-bold uppercase">Calories</span>
							<span>{workout.caloriesBurned}</span>
						</div>
						<div className="flex justify-between items-center text-sm py-4 px-6">
							<span className="text-muted-foreground font-bold uppercase">Rating</span>
							<span>{workout.rating}</span>
						</div>
					</div>
					<h2 className="lg:text-base font-display font-bold uppercase">Instructions</h2>
					<ol className="list-decimal list-inside text-muted-foreground marker:text-neutral-500 space-y-2.5">
						{workout.instructions.map((instruction, ind) => (
							<li key={ind} className="text-muted-foreground">
								{instruction}
							</li>
						))}
					</ol>
					<ActionButtons workout={workout}></ActionButtons>
				</div>
			</div>
		</article>
	);
}
