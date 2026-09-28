'use client';

import { createContext, useState } from 'react';

export const SavedDataContext = createContext({});

export default function SavedDataProvider({ children }) {
	const [plannedWorkouts, setPlannedWorkouts] = useState([]);
	const [savedWorkouts, setSavedWorkouts] = useState([]);
	const [doneWorkouts, setDoneWorkouts] = useState([]);

	const data = {
		plannedWorkouts,
		setPlannedWorkouts,
		savedWorkouts,
		setSavedWorkouts,
		doneWorkouts,
		setDoneWorkouts,
	};

	return <SavedDataContext.Provider value={data}>{children}</SavedDataContext.Provider>;
}
