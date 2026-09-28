import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NothingCard from './nothing-card';
import PlanStatsCard from './plan-stats-card';
import { getWorkouts } from '@/components/home/LibrarySection';

export default async function MyPlanPage({ exerciseCount, exerciseMinutes, caloriesBurned }) {
	const workouts = await getWorkouts();

	return (
		<section className="mx-6 py-10">
			<div className="container mx-auto space-y-6">
				<header>
					<h1 className="text-2xl lg:text-4xl font-display font-bold uppercase">My Plan</h1>
					<p className="text-sm lg:text-base text-muted-foreground">Cap of five lifts for today. Finish them, then load more.</p>
				</header>
				<PlanStatsCard workouts={workouts}></PlanStatsCard>
				<Tabs defaultValue="plan">
					<TabsList>
						<TabsTrigger value="plan">Today&apos;s Plan</TabsTrigger>
						<TabsTrigger value="saved">Saved</TabsTrigger>
					</TabsList>
					<TabsContent value="plan">
						<NothingCard></NothingCard>
					</TabsContent>
					<TabsContent value="saved">
						<NothingCard></NothingCard>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
