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

export interface Post {
	author: Author;
	createdAt: Date;
	title: string;
	slug: string;
	id: string;
	excerpt: string;
	categories: Category[];
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
