import React from 'react';
import Link from 'next/link';
import FormattedDate from './common/Date';
import { Post } from '../services/dto';
import useReadTime from '../hooks/useReadTime';

type Props = {
	post: Post
}

const PostDetails = ({ post: { image, title, slug, createdAt, content: { text }, author } }: Props) => {
	const { time, unit } = useReadTime(text);

	const name = author.name.toLowerCase().replace(' ', '-');

	return (
		<div className="bg-white shadow-lg rounded-lg p-3 lg:p-8 pb-12 mb-8">
			<div className="relative overflow-hidden shadow-md pb-80 mb-6">
				<img src={image.url} alt={title}
						 className="object-center absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"/>
			</div>
			<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
				<div>
					<h1 className="mb-0 text-3xl font-semibold">
						{title}
					</h1>
					<FormattedDate date={createdAt}/> - {time} {unit} read
				</div>
				<div className="hidden lg:flex justify-content-end items-center text-md transition duration-200 mb-0 cursor-pointer hover:text-blue-500">
					<span className="" style={{ width: 96, textAlign: 'right' }}>
						<Link href={`/author/${name}`}>{author.name}</Link>
					</span>
					<img src={author.photo.url} alt={author.name} style={{ height: 60, width: 60 }}
							 className="object-center object-cover shadow-lg rounded-full ml-2"/>
				</div>
			</div>
			<p className="text-justify text-base text-gray-700 font-normal mt-5 mb-2 ">
				{text}
			</p>
		</div>
	);
};

export default PostDetails;
