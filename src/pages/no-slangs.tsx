import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks';
import { Data } from '@/constants';
import Layout from '@/components/Layout';

const Slangs = () => {
	const { data, isError, error } = useQuery<Data>(['slangs'], () =>
		fetch(`/api/slangs`).then((res) => res.json())
	);

	return (
		<Layout>
			<p className="text-3xl text-center pt-5 font-black">
				Slangs you should avoid
			</p>
			<ul className="py-10 px-40 w-full space-y-4">
				{isError ||
					(error && (
						<p className="text-center text-lg font-medium">
							Something went wrong...
						</p>
					))}
				{data && data.status ? (
					data.wordData.map((item) => (
						<li key={item.word} className="flex space-x-4">
							<h2 className="text-3xl font-bold whitespace-nowrap">
								• {item.word.toLowerCase()}
							</h2>
							<p
								className="text-lg font-medium"
								style={{
									lineHeight: 'normal'
								}}
							>
								{item.meaning}
							</p>
						</li>
					))
				) : (
					<p className="text-center text-lg font-medium">no data found</p>
				)}
			</ul>
		</Layout>
	);
};

export default Slangs;
