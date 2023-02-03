import Head from 'next/head';
import Homepage from '@/components/Homepage';

export default function Home() {
  return (
    <>
      <Head>
        <title>boxstore</title>
        <meta
          name='description'
          content='An Ecommerce site built using Next, Redux, Tailwind CSS.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Homepage />
    </>
  );
}
