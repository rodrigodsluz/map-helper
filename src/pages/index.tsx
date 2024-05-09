import Head from 'next/head';

import { HomeScreen } from '@screens/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Map Helper</title>
      </Head>

      <HomeScreen />
    </>
  );
}
