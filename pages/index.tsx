// node modules
import Head from 'next/head';

// local files
import { Collections, Gender, Media } from '../sections';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Venum</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Media />
        <Collections />
        <Gender />
      </main>
    </div>
  );
}
