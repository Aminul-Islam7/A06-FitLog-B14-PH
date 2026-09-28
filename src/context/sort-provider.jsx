'use client';

import { createContext, useState } from 'react';

export const SortContext = createContext({});

export default function SortProvider({ children }) {
	const [sortType, setSortType] = useState('Duration');

	const data = { sortType, setSortType };

	return <SortContext.Provider value={data}>{children}</SortContext.Provider>;
}
