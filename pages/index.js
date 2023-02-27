import styles from '@/styles/Home.module.scss';
import Socials from '@/components/Socials';
import Heading from "@/components/Heading";
import Head from "next/head";

const mainText = 'Hello world!';

export const getStaticProps = async () => {
    const url = `${process.env.API_HOST}/socials/`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { socials: data },
    }
};

const Home = ({ socials }) => (
    <div className={styles.wrapper}>
        <Head>
            <title>
                Home Page
            </title>
        </Head>
        <Socials socials={socials}/>
        <Heading text={mainText}/>
    </div>
);

export default Home;