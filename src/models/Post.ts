export interface Photo {
	url: string;
}

export interface Author {
	bio: string;
	name: string;
	id: string;
	photo: Photo;
}

export interface Category {
	name: string;
	slug: string;
}

export interface Content {
	text: string;
	markdown: string;
}

export interface Post {
	author: Author;
	createdAt: string;
	title: string;
	slug: string;
	id: string;
	excerpt: string;
	content: Content;
	image: Photo;
}

export interface Edge {
	node: Post;
}

export interface PostsConnection {
	edges: Edge[];
}

export interface PostResponse {
	postsConnection: PostsConnection;
}

export interface PostDetailsResponse {
	post: Post
}
