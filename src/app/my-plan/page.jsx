import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NothingCard from './nothing-card';

export default function MyPlanPage({ exerciseCount, exerciseMinutes, caloriesBurned }) {
	return (
		<section className="mx-6 py-10">
			<div className="container mx-auto space-y-6">
				<header>
					<h1 className="text-2xl lg:text-4xl font-display font-bold uppercase">My Plan</h1>
					<p className="text-sm lg:text-base text-muted-foreground">Cap of five lifts for today. Finish them, then load more.</p>
				</header>
				<article className="bg-card border grid grid-cols-3 py-5 sm:py-8 rounded-xl">
					<div className="pl-4 sm:pl-8 flex flex-col gap-2">
						<span className="text-xs text-muted-foreground">Exercises</span>
						<span className="text-3xl sm:text-4xl font-display font-bold text-primary">2</span>
					</div>
					<div className="pl-4 sm:pl-8 flex flex-col gap-2 border-l">
						<span className="text-xs text-muted-foreground">Minutes</span>
						<span className="text-3xl sm:text-4xl font-display font-bold">23</span>
					</div>
					<div className="pl-4 sm:pl-8 flex flex-col gap-2 border-l">
						<span className="text-xs text-muted-foreground">Calories</span>
						<span className="text-3xl sm:text-4xl font-display font-bold">190</span>
					</div>
				</article>
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
