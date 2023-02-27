import Heading from "@/components/Heading";

const Postinfo = ({ post }) => {
    const tag = 'h2';
    const {id, title, body} = post || {};

    if (!post) {
        return <Heading tag={tag} text="Empty post"/>
    }

    return (
        <>
            <Heading tag={tag} text={`Post no. ${id}`}/>
            <div>
                <strong>Title: </strong>
                {title}
            </div>
            <div>
                <strong>Body: </strong>
                {body}
            </div>
        </>
    )
}

export default Postinfo;