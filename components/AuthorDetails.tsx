import React from 'react';
import { Author } from '../services/dto';

type Props = {
	author: Author
}

const AuthorDetails = ({ author }: Props) => {
	return (
		<div className="bg-white shadow-lg rounded-lg p-3 lg:p-8 pb-12 mb-8 flex items-center flex-col">
				<img src={author.photo.url} alt={author.name} className="h-48 shadow-lg rounded-full mb-8"/>
				<h1 className="text-3xl font-semibold mb-8">{author.name}</h1>
				<p className="text-justify">{author.bio}</p>
		</div>
	);
};

export default AuthorDetails;
