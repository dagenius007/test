import Head from 'next/head';
import Router from 'next/router';

export default function Home() {
	React.useEffect(() => {
		Router.push('/login');
	}, []);
	return <></>;
}
