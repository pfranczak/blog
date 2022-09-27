import React, { useEffect } from 'react';
import { Categories, PostDetails, PostWidget } from '../../components';
import { getPostDetails, getPosts } from '../../services';
import { Post } from '../../services/dto';

type Props = {
	post: Post
}

const PostDetailsPage = (props: Props) => {
	useEffect(() => {
		console.log("PROPS:", props);
	}, []);

	const categories = props.post.categories.map(c => c.slug);

	return (
		<div className="container mx-auto px-10 mb-8">
			<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
				<div className="lg:col-span-8 col-span-1">
					<PostDetails post={props.post}/>
				</div>
				<div className="lg:col-span-4 col-span-1">
					<div className="lg:sticky relative top-8">
						<PostWidget categories={categories} slug={props.post.slug}/>
						<Categories/>
					</div>
				</div>
			</main>
		</div>
	);
};

export async function getStaticProps({ params }) {
	const data = await getPostDetails(params.slug);

	return {
		props: {
			post: data,
		},
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();
	return {
		paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
		fallback: true,
	};
}

export default PostDetailsPage;
