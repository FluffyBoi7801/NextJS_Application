import { FC } from "react";
import Heading from "../../components/Heading";
import Postinfo from "../../components/Postinfo";
import {postType} from "../../types";

type postTypeProps = {
    post: postType,
}

export const getStaticPaths = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const data = await response.json();

    const paths = data.map(({ id })=> ({
        params: { id: id.toString() },
    }));

    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = async (context) => {
    const { id } = context.params;
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { post: data },
    }
};

const Post:FC<postTypeProps> = ({ post }) => (
    <>
        <Heading text={"Post:"}/>
        <Postinfo post={ post }/>
    </>
);

export default Post;