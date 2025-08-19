import { FormResultInterface } from '@/types/types';

export default function FormResultPlain({
	result,
}: {
	result: FormResultInterface;
}) {
	return (
		<article>
			<pre>{JSON.stringify(result, null, 2)}</pre>
		</article>
	);
}
