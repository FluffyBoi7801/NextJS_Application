import Heading from "@/components/Heading";
import Head from "next/head";
import {useEffect, useState} from "react";
import Link from "next/link";

export const getStaticProps = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contacts: data },
    }
};

const ContactsHome = ({ contacts }) => {

    return (
        <>
        <Head>
            <title>
                Contacts Page
            </title>
        </Head>
        <Heading text={"Contact list:"}/>
        <ul>
            {contacts && contacts.map(({ id, name, email }) => (
                <li key={id}>
                    <Link href={`/contacts/${id}`}>{name} ({email})</Link>
                </li>
            ))}
        </ul>
    </>
    );
};

export default ContactsHome;