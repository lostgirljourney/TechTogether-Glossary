import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks';
import { Data } from '@/constants';
import Layout from '@/components/Layout';

const Home = () => {
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 2000);

	const { data, isError, error } = useQuery<Data>(
		['data', debouncedSearch],
		() => fetch(`/api/?word=${debouncedSearch}`).then((res) => res.json()),
		{
			keepPreviousData: true
		}
	);

	return (
		<Layout>
			<div className="flex justify-center items-center gap-2 p-8">
				<label className="text-xl font-bold lowercase" htmlFor="search">
					Search
				</label>
				<input
					id="search"
					type="text"
					placeholder="enter your word here"
					className="input input-bordered lowercase focus:border-pink-500  focus:outline-none input-md w-full max-w-xs text-base"
					value={search}
					onChange={(event: any) => setSearch(event.target.value)}
				/>
			</div>
			<ul className="py-10 px-40 w-full space-y-4">
				{isError || (error && <p>Something went wrong...</p>)}
				{data && data.status && data?.wordData.length > 0 ? (
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
				) : debouncedSearch ? (
					<p className="text-center text-lg font-medium">no data found</p>
				) : (
					<p className="text-center text-lg font-medium">search for a word</p>
				)}
			</ul>
		</Layout>
	);
};

export default Home;
