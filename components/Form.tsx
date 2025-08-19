import { FormType, FormResultInterface } from '@/types/types';
import { CONSTRAINTS, isEmptyObj } from '@/utils/utils';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormResult from './FormResult';
import FormResultPlain from './FormResultPlain';

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitSuccessful, errors },
	} = useForm<FormType>();
	const setValueAs = (v: string) => parseFloat(v);
	const onSubmit = ({ before, after }: FormType) =>
		setResult((prev) => ({ ...prev, before, after }));
	const [result, setResult] = useState<FormResultInterface>({
		name: 'Untitled',
		before: 0,
		after: 0,
	});

	const inputClass = classNames('border-1 border-slate-300', {
		'border-red-500!': !isEmptyObj(errors),
	});

	return (
		<>
			<section>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-start'
				>
					<input
						{...register('before', { ...CONSTRAINTS, setValueAs })}
						type='text'
						className={inputClass}
					/>
					<input
						{...register('after', { ...CONSTRAINTS, setValueAs })}
						type='text'
						className={inputClass}
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
