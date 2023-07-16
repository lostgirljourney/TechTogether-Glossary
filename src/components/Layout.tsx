import Link from 'next/link';

const Layout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => (
	<main>
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link href="/" className="normal-case text-xl">
					TechTogether Glossary 📚
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/no-slangs">Say NO to Slangs! ↗</Link>
					</li>
				</ul>
			</div>
		</div>
		{children}
	</main>
);

export default Layout;
