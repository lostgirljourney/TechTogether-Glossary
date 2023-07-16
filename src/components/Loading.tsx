const Loading = () => (
	<div className="flex justify-center items-center w-full h-40 gap-4">
		<span className="loading loading-spinner text-primary"></span>
		<span className="loading loading-spinner text-secondary"></span>
		<span className="loading loading-spinner text-accent"></span>
		<span className="loading loading-spinner text-neutral"></span>
		<p className="text-center text-lg font-medium">loading</p>
		<span className="loading loading-spinner text-info"></span>
		<span className="loading loading-spinner text-success"></span>
		<span className="loading loading-spinner text-warning"></span>
		<span className="loading loading-spinner text-error"></span>
	</div>
);

export default Loading;
