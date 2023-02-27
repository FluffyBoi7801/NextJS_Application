import Heading from "@/components/Heading";
import Contactinfo from "@/components/Contactinfo";

export const getServerSideProps = async (context) => {
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

const Contact = ({ contact }) => (
    <>
        <Heading text={"Contact:"}/>
        <Contactinfo contact={ contact }/>
    </>
);

export default Contact;