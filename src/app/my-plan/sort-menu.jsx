'use client';

import { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { SortContext } from '@/context/sort-provider';

export default function SortMenu() {
	const { sortType, setSortType } = useContext(SortContext);

	return (
		<div className="flex gap-2 items-center">
			<span className="text-muted-foreground text-xs">Sort by</span>
			<DropdownMenu>
				<DropdownMenuTrigger
					render={
						<Button variant="secondary" className="rounded-lg text-xs">
							{sortType}
							<ChevronDown />
						</Button>
					}
				/>
				<DropdownMenuContent>
					<DropdownMenuRadioGroup value={sortType} onValueChange={setSortType}>
						<DropdownMenuRadioItem className="text-xs" value="Duration">
							Duration
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem className="text-xs" value="Calories">
							Calories
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem className="text-xs" value="Rating">
							Rating
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
