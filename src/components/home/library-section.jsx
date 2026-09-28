import WorkoutCard from './workout-card';
import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';

export async function getWorkouts() {
	try {
		const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
			next: { revalidate: 3600 },
		});

		if (!res.ok) {
			console.error(`Failed to fetch workout list with status: ${res.status}`);
			return null;
		}

		return await res.json();
	} catch (error) {
		console.error('Network or parsing error from workout data API:', error);
		return null;
	}
}

export default async function LibrarySection() {
	const workouts = await getWorkouts();

	return (
		<section className="mx-6">
			<div className="container mx-auto py-6">
				<h2 className="text-xl lg:text-3xl font-display font-bold uppercase text-center sm:text-left mb-1">The Library</h2>
				<p className="text-xs lg:text-base text-muted-foreground text-center sm:text-left">Twelve lifts covering every major muscle group.</p>
				{!workouts ? (
					<article className="bg-neutral-950 mt-10 border-3 border-dashed rounded-xl h-100 p-6 text-center flex flex-col gap-2 justify-center items-center">
						<TriangleAlert size={80} />
						<p className="font-bold font-display text-xl uppercase mt-2">Sorry</p>
						<p className="text-muted-foreground text-xs">Failed to load workouts. Please try again later.</p>
					</article>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
						{workouts.map(workout => (
							<Link key={workout.id} href={`/workouts/${workout.id}`}>
								<WorkoutCard workout={workout}></WorkoutCard>
							</Link>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
