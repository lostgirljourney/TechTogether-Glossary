import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/globals.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>TechTogether Glossary 📚</title>
		</Head>
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
			<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	</>
);

export default App;
