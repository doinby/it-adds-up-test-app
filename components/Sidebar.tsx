'use client';

import { useResultStore } from '@/utils/store-results';

export default function Sidebar() {
	const results = useResultStore((state) => state.results);
	return (
		<aside>
			<p>Aside</p>
			<pre>{JSON.stringify(results, null, 2)}</pre>
		</aside>
	);
}
