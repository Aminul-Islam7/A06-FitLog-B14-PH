import Image from 'next/image';
import { Button } from '../ui/button';
import heroImage from '@/assets/hero-image.png';

export default function Hero() {
	return (
		<section className="mx-6">
			<div className="my-10 bg-card border rounded-2xl container mx-auto p-12 flex flex-col sm:flex-row justify-between items-center">
				<div className="md:max-w-80 lg:max-w-130 xl:max-w-160 space-y-5 text-center sm:text-left">
					<p className="text-primary uppercase text-[9px] md:text-[10px] lg:text-[11px]">Workout Library</p>
					<h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-extrabold uppercase">Train With Intent. Log Every Set.</h1>
					<p className="text-xs md:text-sm lg:text-base text-muted-foreground">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p>
					<a href="#library-section">
						<Button size="lg" className="uppercase text-xs font-bold">
							Browse Workouts
						</Button>
					</a>
				</div>
				<Image className="mt-6" src={heroImage} alt="Hero Image"></Image>
			</div>
		</section>
	);
}
