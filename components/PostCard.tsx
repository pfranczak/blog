import React from 'react';
import { Post } from '../types/posts';

type Props = {
    post: Post
}

const PostCard = ({ post: { title, excerpt } }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{excerpt}</h2>
        </div>
    );
};

export default PostCard;
