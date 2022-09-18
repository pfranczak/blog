import React from 'react';
import { Post } from '../services/dto';

type Props = {
    post: Post
}

const PostCard = (props: Props) => {
  console.log(props.post.title)
    return (
        <div>
            <h1>{props.post.title}</h1>
            <h2>{props.post.excerpt}</h2>
        </div>
    );
};

export default PostCard;
