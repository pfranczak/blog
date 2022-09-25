import React from 'react';
import { Post } from '../services/dto';
import Link from 'next/link';
import useReadTime from '../hooks/useReadTime';
import FormattedDate from './common/Date';

type Props = {
    post: Post
}

const PostCard = ({ post: { image, title, slug, excerpt, content: { text }, createdAt } }: Props) => {
    const { time, unit } = useReadTime(text);

    return (
        <div className="bg-white shadow-lg rounded-lg p-3 lg:p-8 pb-12 mb-8">
           <div className="relative overflow-hidden shadow-md pb-80 mb-6">
              <img src={image.url} alt={title}
                   className="object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"/>
           </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <h1 className="transition duration-700 mb-0 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
              <Link href={`/post/${slug}`}>{title}</Link>
            </h1>
            <span className="align-middle"><FormattedDate date={createdAt}/> - {time} {unit} read</span>
          </div>
          <p className="text-justify text-base text-gray-700 font-normal mt-5 mb-2 ">
            {excerpt} <Link href={`/post/${slug}`}>
            <span className="font-normal cursor-pointer text-blue-500">(Continue reading)</span>
            </Link>
          </p>
        </div>
    );
};

export default PostCard;
