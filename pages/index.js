import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Fast Food </title>
        <meta name='description' content='Top selling Fast food shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <img src='../public/images/Pizza .jpg' alt='Pizza with Onions' />
    </div>
  );
}
