import { FormType, FormResultInterface } from '@/types/types';
import { CONSTRAINTS } from '@/utils/utils';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormResult from './FormResult';
import FormResultPlain from './FormResultPlain';

export default function Form() {
	const {
		register,
		getValues,
		setValue,
		handleSubmit,
		formState: { isSubmitSuccessful, errors },
	} = useForm<FormType>();
	const onSubmit = ({ before, after }: FormType) => {
		setResult((prev) => ({
			...prev,
			before: parseFloat(before),
			after: parseFloat(after),
		}));
	};

	const [result, setResult] = useState<FormResultInterface>({
		name: 'Untitled',
		before: 0,
		after: 0,
	});
	// console.log(result);

	function handleReverse() {
		const prev = getValues();
		setValue('before', prev.after);
		setValue('after', prev.before);
	}

	return (
		<>
			<section>
				<form
					onSubmit={handleSubmit(onSubmit)}
					// onSubmit={handleSubmit(console.log)}
					className='flex flex-col items-start'
				>
					<input
						{...register('before', CONSTRAINTS)}
						type='text'
						name='before'
						className={`border-1 border-slate-300 ${
							'before' in errors && 'border-red-500!'
						}`}
					/>
					<button onClick={handleReverse} type='button'>
						Reverse
					</button>
					<input
						{...register('after', CONSTRAINTS)}
						type='text'
						name='after'
						className={`border-1 border-slate-300 ${
							'after' in errors && 'border-red-500!'
						}`}
					/>
					<button type='submit'>Submit</button>
				</form>
			</section>

			{isSubmitSuccessful && (
				<section>
					<FormResult result={result} />
					<FormResultPlain result={result} />
				</section>
			)}
		</>
	);
}
