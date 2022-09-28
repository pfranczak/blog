import React, { useEffect } from 'react';
import { Categories, PostCard, PostDetails, PostWidget } from '../../components';
import { getCategories, getPostDetails, getPosts, getPostsFromCategory } from '../../services';
import { Post } from '../../services/dto';

type Props = {
	posts: Post[]
}

const CategoryPosts = ({ posts }: Props) => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
				<div className="lg:col-span-8 col-span-1">
					{posts?.map(post =>
						<PostCard post={post} key={post.title}/>
					)}
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

export async function getStaticProps({ params }) {
	const { posts } = await getPostsFromCategory(params.category) || [];
	return {
		props: {
			posts,
		},
	};
}

export async function getStaticPaths() {
	const { categories } = await getCategories();
	return {
		paths: categories.map(({ name }) => ({ params: { category: name } })),
		fallback: true,
	};
}

export default CategoryPosts;
