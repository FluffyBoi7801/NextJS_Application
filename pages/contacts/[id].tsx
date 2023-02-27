import { GetServerSideProps } from "next";
import Heading from "../../components/Heading";
import ContactInfo from "../../components/Contactinfo";
import {contactType} from "../../types";
import {FC} from "react";

type contactTypeProps = {
    contact: contactType,
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    const { id } = context.params;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contact: data },
    }
};

const Contact:FC<contactTypeProps> = ({ contact }) => (
    <>
        <Heading text={"Contact:"}/>
        <ContactInfo contact={ contact }/>
    </>
);

export default Contact;