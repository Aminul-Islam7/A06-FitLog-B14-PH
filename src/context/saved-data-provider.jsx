'use client';

import { createContext, useState, useEffect, useRef } from 'react';

export const SavedDataContext = createContext({});

export default function SavedDataProvider({ children }) {
	const [plannedWorkouts, setPlannedWorkouts] = useState([]);
	const [savedWorkouts, setSavedWorkouts] = useState([]);
	const [doneWorkouts, setDoneWorkouts] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const planned = localStorage.getItem('fitlog_planned');
		const saved = localStorage.getItem('fitlog_saved');
		const done = localStorage.getItem('fitlog_done');

		const timer = setTimeout(() => {
			if (planned) setPlannedWorkouts(JSON.parse(planned));
			if (saved) setSavedWorkouts(JSON.parse(saved));
			if (done) setDoneWorkouts(JSON.parse(done));
			setIsLoaded(true);
		}, 0);

		// return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isLoaded) return; // Prevents overwriting data with empty arrays on first load

		localStorage.setItem('fitlog_planned', JSON.stringify(plannedWorkouts));
		localStorage.setItem('fitlog_saved', JSON.stringify(savedWorkouts));
		localStorage.setItem('fitlog_done', JSON.stringify(doneWorkouts));
	}, [plannedWorkouts, savedWorkouts, doneWorkouts, isLoaded]);

	const data = {
		plannedWorkouts,
		setPlannedWorkouts,
		savedWorkouts,
		setSavedWorkouts,
		doneWorkouts,
		setDoneWorkouts,
		isLoaded,
	};

	return <SavedDataContext.Provider value={data}>{children}</SavedDataContext.Provider>;
}
