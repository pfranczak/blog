import React, { useEffect } from 'react';
import { AuthorDetails, Categories, PostDetails, PostWidget } from '../../components';
import { getAuthor, getAuthors, getPostDetails, getPosts } from '../../services';
import { Author, Post } from '../../services/dto';

type Props = {
	author: Author
}

const AuthorPage = (props: Props) => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
				<div className="lg:col-span-8 col-span-1">
					{!!props.author && <AuthorDetails author={props.author}/>}
				</div>
				<div className="lg:col-span-4 col-span-1">
					<div className="lg:sticky relative top-8">
						<PostWidget/>
						<Categories/>
					</div>
				</div>
			</main>
		</div>
	);
};

function capitalizeFirstLetter(text: String) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function getStaticProps({ params }: { params: { name: string } }) {
	const name = params.name.split('-');
	name[0] = capitalizeFirstLetter(name[0]);
	name[1] = capitalizeFirstLetter(name[1]);
	const { author } = await getAuthor(name.join(' '));

	return {
		props: {
			author
		},
	};
}

export async function getStaticPaths() {
	const { authors } = await getAuthors();
	return {
		paths: authors.map((author) => {
			const name = author.name.toLowerCase().replace(' ', '-');
			return { params: { name } }}),
		fallback: true,
	};
}

export default AuthorPage;
