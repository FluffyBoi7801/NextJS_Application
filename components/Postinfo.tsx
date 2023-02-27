import Heading from "./Heading";
import { postType } from "../types";
import {FC} from "react";

type postInfoProps = {
    post: postType,
}

const Postinfo:FC<postInfoProps> = ({ post }) => {
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