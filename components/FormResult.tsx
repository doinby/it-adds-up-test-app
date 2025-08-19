import { FormResultInterface } from '@/types/types';
import { useResultStore } from '@/utils/store-results';

export default function FormResult({
	result,
}: {
	result: FormResultInterface;
}) {
	const save = useResultStore((state) => state.saveResult);

	function handleClick() {
		save(result);
	}

	return (
		<article className='border-1 border-slate-300'>
			<p>
				before <span>{result.before}</span>
			</p>
			<p>
				after <span>{result.after}</span>
			</p>
			<button onClick={handleClick} type='button'>
				Save Result
			</button>
		</article>
	);
}
