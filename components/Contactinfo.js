import Heading from "@/components/Heading";

const Contactinfo = ({ contact }) => {
    const tag = 'h2';
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};

    if (!contact) {
        return <Heading tag={tag} text="Empty contact"/>
    }

    return (
        <>
            <Heading tag={tag} text={name}/>
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )

}

export default Contactinfo;