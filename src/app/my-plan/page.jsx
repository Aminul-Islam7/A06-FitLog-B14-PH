import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PlanStatsCard from './plan-stats-card';
import PlanViews from './plan-views';
import SortMenu from './sort-menu';
import { getWorkouts } from '@/components/home/workout-grid';
import SortProvider from '@/context/sort-provider';

export default async function MyPlanPage() {
	// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
	// await delay(5000);
	const workouts = await getWorkouts();

	return (
		<section className="mx-6 py-10">
			<div className="container mx-auto space-y-6">
				<header>
					<h1 className="text-2xl lg:text-4xl font-display font-bold uppercase">My Plan</h1>
					<p className="text-sm lg:text-base text-muted-foreground mt-2">Cap of five lifts for today. Finish them, then load more.</p>
				</header>
				<PlanStatsCard workouts={workouts}></PlanStatsCard>
				<SortProvider>
					<Tabs defaultValue="plan">
						<div className="flex flex-col sm:flex-row justify-between items-center gap-3">
							<TabsList>
								<TabsTrigger value="plan">Today&apos;s Plan</TabsTrigger>
								<TabsTrigger value="saved">Saved</TabsTrigger>
							</TabsList>
							<SortMenu></SortMenu>
						</div>
						<PlanViews workouts={workouts}></PlanViews>
					</Tabs>
				</SortProvider>
			</div>
		</section>
	);
}
