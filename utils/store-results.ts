import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type ResultType = {
	name: string;
	before: number;
	after: number;
};

interface ResultState {
	results: ResultType[] | [];
	saveResult: (data: ResultType) => void;
}

export const useResultStore = create<ResultState>()(
	devtools(
		persist(
			(set) => ({
				results: [],
				saveResult: ({ name, before, after }) =>
					set((state) => ({
						results: [...state.results, { name, before, after }],
					})),
			}),
			{ name: 'resultStore' }
		)
	)
);
