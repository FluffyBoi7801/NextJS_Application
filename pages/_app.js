import '@/styles/globals.scss';
import styles from '@/styles/App.module.scss';
import Layout from "@/components/Layout";
import ytImg from '../public/youtube.png';
import Image from "next/image";
import Head from "next/head";

const fontUrl = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap';

const App = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <link href={fontUrl} rel="stylesheet"/>
        </Head>
        <div className={styles.wrapper}>
            <main>
                <Component {...pageProps} />
            </main>
            <Image src={ytImg}
                   alt={"preview"}
                   width={1000}
                   height={500}
                   placeholder="blur"
            />
        </div>
    </Layout>
)

export default App;
