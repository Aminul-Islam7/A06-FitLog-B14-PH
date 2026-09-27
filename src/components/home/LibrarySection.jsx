import WorkoutCard from './WorkoutCard';

export default async function LibrarySection() {
	const data = await fetch('https://api.abcz.workers.dev/api/fitlog');
	const workouts = await data.json();

	return (
		<section className="mx-6">
			<div className="container mx-auto py-6">
				<h2 className="text-xl lg:text-3xl font-display font-bold uppercase text-center sm:text-left mb-1">The Library</h2>
				<p className="text-xs lg:text-base text-muted-foreground text-center sm:text-left">Twelve lifts covering every major muscle group.</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
					{workouts.map((workout, index) => (
						<WorkoutCard workout={workout} key={index}></WorkoutCard>
					))}
				</div>
			</div>
		</section>
	);
}
